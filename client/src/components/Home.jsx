import React, { useState } from "react";
import { baseURL } from "../api";
import { useHistory } from "react-router-dom";
import { Form,Button, Input, Radio, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import './Home.css'

const Home = () => {
  const [loginData, setloginData] = useState({ email: "", password: "", sender: "" });
  const history = useHistory();
  const [isLoading, setisLoading] = useState(false);


  const onFinish = values => {
    console.log(values)
    setisLoading(true)
    // Remove-Arti
    history.push(`/userDashboard`);
    fetch(`${baseURL}/login`, {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((result, err) => {
        setisLoading(false)
        if (err) {
          console.log(err);
          message.error("Something went wrong");
          return;
        }
        if (result.success) {
          message.success(result.message);
          localStorage.setItem(`${values.sender}Token`, result.data.token);
          history.push(`/${values.sender}`);
        } else {
          message.info(result.message);
          
        }
        console.log(result);
      });
    
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="./smartcity1.png" alt="Login"/>
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">  Welcome back</p>
          <p></p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              placeholder="Email"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
            />
          </Form.Item>

           {/* <Form.Item 
            name="sender" 
            rules={[{ required: true, message: 'Please select your role!' }]}>
          <Radio.Group onChange={(e) => {setloginData({ ...loginData, sender: e.target.value })}} value={loginData.sender}>
            <Radio value={'client'}>YES</Radio>
            <Radio value={'bank'}>NO</Radio>
          </Radio.Group>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
            <div style={{textAlign: "center"}}>Don't have a account yet? <br/>
            <span style={{color:"#1890ff",cursor:"pointer"}} onClick={()=>history.push('/user/NewUser')}>Create an account</span></div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default Home;
