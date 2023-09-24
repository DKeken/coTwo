"use client";

import { PlusCircleFilled } from "@ant-design/icons";
import {
  Button,
  Drawer,
  type ButtonProps,
  Typography,
  Form,
  Input,
  Switch,
  Select,
} from "antd";
import { useUnit } from "effector-react";
import { $isOpen, buttonClicked } from "./model";
import { useForm } from "antd/es/form/Form";

export const AddObject = (props: ButtonProps) => {
  const isOpen = useUnit($isOpen);
  const [form] = useForm();

  return (
    <>
      <Button
        icon={<PlusCircleFilled />}
        className="bg-[#00be37] border-none"
        shape="round"
        onClick={() => buttonClicked()}
        {...props}
      >
        Добавить объект
      </Button>
      <Drawer
        title="Добавление объекта"
        placement="right"
        open={isOpen}
        onClose={() => {
          form.resetFields();
          buttonClicked();
        }}
        headerStyle={{ background: "#00be37" }}
        bodyStyle={{ background: "#141b22" }}
      >
        <Form form={form}>
          <Typography.Text className="text-white text-xl font-normal">
            Информация об объекте
          </Typography.Text>
          <Form.Item name={"name"} className="mt-[17px] mb-[13px]" required>
            <Input
              placeholder="Название"
              className="bg-[#11161D] placeholder-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.5)]"
              style={{ borderColor: "rgba(112, 119, 128, 0.4)" }}
            />
          </Form.Item>
          <Form.Item
            name={"ejection"}
            valuePropName="checked"
            initialValue={true}
            label={
              <Typography.Text className="text-white text-base font-light">
                Выбросы
              </Typography.Text>
            }
          >
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="Сфера охвата"
              className="bg-[#11161D] placeholder-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.5)]"
            />
          </Form.Item>
          <Form.Item>
            <Select placeholder="Методика расчета" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
