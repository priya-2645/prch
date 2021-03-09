
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import isPresent from './util';
import { Table, Modal, Button,Input } from 'antd';


function App() {
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true);
  };
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState('');
  const[price, setPrice] = useState('');
  const[address, setAddress] = useState('');
  const[country, setCountry] = useState('');

  const addProduct = () => {
      setProduct(product.concat({ productName,price,address,country}));
      setProductName('');
      setPrice('');
      setAddress('');
      setCountry('');
      setVisible(false);
  };
  const deleteRow = (item) => {
      const productData = product.splice(item);
      setProduct(productData);
  };

  const handleCancel = () => {
    setVisible(false)
  };


  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'name',
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record,idx) => (
        <span>
          <button onClick={() => deleteRow(idx)}>
            Remove
          </button>

        </span>
      ),
    },




  ];


  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Product
        </Button>
      <Modal
        visible={visible}
        title="Add Product"
        width={350}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
            </Button>,
          <Button key="submit" type="primary" onClick={addProduct}>
            Submit
            </Button>,
        ]}
      >
      
        <Input
          type="text"
          name="product_name"
          value={productName}
          placeholder ="Product Name"
          style ={{marginBottom:'.5rem'}}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          type="text"
          name="price"
          value={price}
          placeholder ="Price"
          style ={{marginBottom:'.5rem'}}
          onChange={(e) => setPrice(e.target.value)}
        />
         <Input
          type="text"
          name="address"
          placeholder ="Address"
          value={address}
          style ={{marginBottom:'.5rem'}}
          onChange={(e) => setAddress(e.target.value)}
        />
          <Input
          type="text"
          placeholder="Country"
          name="country"
          value={country}
          style ={{marginBottom:'.5rem'}}
          onChange={(e) => setCountry(e.target.value)}
        />
      </Modal>
      <Table dataSource={product} columns={columns} />
    </div>
  );
}


export default App;

