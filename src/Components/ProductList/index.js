import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import './index.css';

const ProductList = ({ products, onDelete, onEdit }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span className="action-buttons">
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure delete this product?"
            onConfirm={() => onDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button>Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className="product-list-table">
      <Table dataSource={products} columns={columns} pagination={{ pageSize: 8 }} />
    </div>
  );
};

export default ProductList;
