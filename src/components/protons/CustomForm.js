import React from "react";
import { Button, Form, Space } from "antd";

const SubmitButton = ({ submitButtonName, form }) => {
  return (
    <Button type="primary" htmlType="submit">
      {submitButtonName}
    </Button>
  );
};

function CustomForm({
  name,
  submitButtonName = "Submit",
  children,
  form,
  ...otherProps
}) {
  return (
    <Form
      form={form}
      name={name}
      layout="vertical"
      autoComplete="off"
      {...otherProps}
    >
      {children}
      <Form.Item>
        <Space>
          <SubmitButton form={form} submitButtonName={submitButtonName} />
        </Space>
      </Form.Item>
    </Form>
  );
}

export default CustomForm;
