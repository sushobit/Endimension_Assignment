import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const AddProductForm = ({ onFinish }) => {
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the product name' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the product description' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter the product price' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category' }]}>
        <Select placeholder="Select category">
            <Option value="Gaming Consoles">Gaming Consoles</Option>
            <Option value="Gaming Mouse">Gaming Mouse</Option>
            <Option value="Gaming keyboards">Gaming keyboards</Option>
            <Option value="Gaming Components">Gaming Components</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;
