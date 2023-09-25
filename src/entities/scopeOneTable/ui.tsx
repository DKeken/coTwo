"use client";

import { Form, FormInstance, Input, InputRef, Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, dataChanged, type ScopeOne } from "./model";
import { type ColumnsType } from "antd/es/table";
import React, { useContext, useEffect, useRef, useState } from "react";

export const EditableContext = React.createContext<FormInstance<any> | null>(
  null
);

function formatNumber(value: number) {
  if (Number.isInteger(value)) {
    return value.toString();
  } else {
    const fixedValue = value.toFixed(3);
    return fixedValue.replace(/(\.0{1,3})$/, "");
  }
}

const EditableRow: React.FC<any> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell: React.FC<any> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export const ScopeOneTable = () => {
  const dataSource = useUnit($data);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleSave = (row: ScopeOne) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    dataChanged(newData);
  };

  const columns: ColumnsType<ScopeOne> = [
    {
      title: "Название источника",
      dataIndex: "source",
      width: 160,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">Итого</Typography.Text>
          );
        }
        return (
          <Typography.Text className="text-white">
            {data.source}
          </Typography.Text>
        );
      },
    },
    {
      title: "Название цеха/ промплощадки (номер технологической линии)",
      dataIndex: "workshopName",
      width: 220,
    },
    {
      title: "Вид топлива",
      dataIndex: "fuelType",
      width: 190,
    },
    {
      title: "Расход топлива в натуральном выражении",
      dataIndex: "fuelConsumption",
      width: 150,
      onCell: (record) => ({
        record,
        editable: true,
        dataIndex: "fuelConsumption",
        title: "Расход топлива в натуральном выражении",
        handleSave,
      }),
      render: (value, data) => {
        if (!data.total) {
          return value + " тыс. т";
        }
      },
    },
    {
      title: "Низшая теплота сгорания (коэфф. перевода в энергетич. ед.)",
      dataIndex: "lowCalorificValue",
      width: 220,
    },
    {
      title: "Расход топлива в энергетическом эквиваленте за период",
      dataIndex: "fuelConsumptionInEnergy",
      width: 200,
      render: (value, data) => {
        const thisRow = dataSource.find((item) => item.key === data.key);
        if (thisRow && thisRow.lowCalorificValue && thisRow.fuelConsumption) {
          return thisRow.lowCalorificValue * thisRow.fuelConsumption;
        }
        return 0;
      },
    },
    {
      title: "Коэффициент окисления топлива",
      dataIndex: "fuelOxidationFactor",
      width: 170,
    },
    {
      title: "Коэффициент выбросов СО2 от сжигания топлива",
      dataIndex: "COEmissionFactor",
      width: 190,
    },
    {
      title: "ВПГ, т СО2экв",
      dataIndex: "VPG",
      width: 150,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">
              {dataSource.reduce((acc, vpgObj) => acc + (vpgObj.VPG || 0), 0)}{" "}
              тонн
            </Typography.Text>
          );
        }

        const thisRow = dataSource.find((item) => item.key === data.key);

        if (
          thisRow &&
          thisRow.lowCalorificValue &&
          thisRow.fuelConsumption &&
          thisRow.COEmissionFactor &&
          thisRow.fuelOxidationFactor
        ) {
          const fuelConsumptionInEnergy =
            thisRow.lowCalorificValue * thisRow.fuelConsumption;
          const calcValue =
            fuelConsumptionInEnergy *
            thisRow.COEmissionFactor *
            thisRow.fuelOxidationFactor;

          return formatNumber(calcValue);
        }

        return 0;
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className="scopeOneTable"
      components={components}
      scroll={{ y: 670 }}
    />
  );
};
