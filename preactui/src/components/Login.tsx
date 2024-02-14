import { Button, Form, Input } from "antd";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const onFinish = (values: LoginData) => {
  console.log("Success:", values);
  loadData(values.username, values.password);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type LoginData = {
  username?: string;
  password?: string;
};

const loadData = async (email, password) => {
  if (password.length > 0 && password.length > 0) {
    console.log("email:", email);
    console.log("password", password);
    pb.collection("users").authWithPassword(email, password);
  }
};

export function Login() {
  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<LoginData>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<LoginData>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
