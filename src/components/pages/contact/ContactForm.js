import React from "react";
import { useStore } from "react-redux";
import { Form, Input, message } from "antd";

import withMiddleDetailsSection from "../../../hooks/withMiddleDetailsSection";
import { FORM_DATA } from "../../../redux/actions/actionTypes";
import useResponsive from "../../../hooks/useResponsive";
import CustomForm from "../../protons/CustomForm";
import services from "../../../services";

const ContactFormGeneric = () => {
  const store = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "contact";
  const [form] = Form.useForm();

  const handleOnChange = (fields) => {
    fields.forEach((field) => {
      const [name] = field.name;
      store.dispatch({
        type: FORM_DATA,
        payload: {
          [name]: field.value,
        },
      });
    });
  };

  const initialFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleContactFormSubmit = async (values) => {
    messageApi.open({
      key,
      content: "Sending message... 🐌",
    });
    try {
      await services.commonService.contact(values);
      messageApi.open({
        key,
        content:
          "✅ Done! Thank you for your message, I'll get back to you! 🤗",
        duration: 5,
      });

      // Reset form values
      store.dispatch({
        type: FORM_DATA,
        payload: initialFormValues,
      });
    } catch (error) {
      messageApi.open({
        key,
        content: "🚨 Wait! Something went wrong, DM me on twitter! 🐥",
        duration: 5,
      });
    }
  };

  return (
    <div className="contact-form-container">
      {contextHolder}
      <CustomForm
        name="contact"
        submitButtonName="send-message"
        size="large"
        form={form}
        onFieldsChange={handleOnChange}
        onFinish={handleContactFormSubmit}
      >
        <Form.Item
          name="name"
          label="_name"
          rules={[
            {
              required: true,
              message: "Please Enter your name 🙃",
            },
          ]}
        >
          <Input placeholder="Johhny Bravo 💪🏻" />
        </Form.Item>
        <Form.Item
          name="email"
          label="_email"
          rules={[
            {
              type: "email",
              message: "Invalid email! 🤓",
            },
            {
              required: true,
              message: "Please Enter your email 📧",
            },
          ]}
        >
          <Input placeholder="johnny@example.com 🤷🏼‍♂️" />
        </Form.Item>
        <Form.Item
          name="message"
          label="_message"
          rules={[
            {
              required: true,
              message: "Please Enter your message 🎠",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Jot down your message here...🖊️"
            rows={4}
          />
        </Form.Item>
      </CustomForm>
    </div>
  );
};

const MiddleDetailsSection = withMiddleDetailsSection(() => {
  return <ContactFormGeneric />;
});

function ContactForm() {
  const { isTabletOrMobile } = useResponsive();
  if (isTabletOrMobile) return <ContactFormGeneric />;
  return <MiddleDetailsSection />;
}

export default ContactForm;
