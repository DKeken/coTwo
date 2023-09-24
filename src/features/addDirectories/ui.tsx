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

export const AddDirectories = (props: ButtonProps) => {
  const isOpen = useUnit($isOpen);
  const [form] = useForm();

  return (
    <>
      <Button
        icon={<PlusCircleFilled />}
        className="bg-[#00be3680] border-none"
        shape="round"
        onClick={() => buttonClicked()}
        disabled
        {...props}
      >
        Добавить справочник
      </Button>
      <Drawer
        title="Добавление справочника"
        placement="right"
        open={isOpen}
        onClose={() => {
          form.resetFields();
          buttonClicked();
        }}
        headerStyle={{ background: "#00be37" }}
        bodyStyle={{ background: "#141b22" }}
      ></Drawer>
    </>
  );
};
