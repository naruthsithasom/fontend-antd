import React from 'react';
import'./App.css';
import { Table, Row, Col , Form, Input, Button} from 'antd';

function App(){
  const layout = {
    labelCol: {
      xs: 24,
      sm: 24,
      md: 20
    },
    wrapperCol: {
      xs: 18,
      sm: 26,
      md: 20
    }
  }

  function onFinish(x){
    console.log(x)
  }

  const student = [{
    "first_name": "Nona",
    "last_name": "St. Hill",
    "email": "nsthill0@miitbeian.gov.cn",
    "gender": "Female",
    "university": "Istanbul Arel University"
  }, {
    "first_name": "Felice",
    "last_name": "Wilcocke",
    "email": "fwilcocke1@nytimes.com",
    "gender": "Male",
    "university": "University of Maryland Baltimore County"
  }, {
    "first_name": "Chester",
    "last_name": "Ruske",
    "email": "cruske2@spotify.com",
    "gender": "Male",
    "university": "Rafsanjan University of Medical Sciences"
  }, {
    "first_name": "Christye",
    "last_name": "Biddy",
    "email": "cbiddy3@sakura.ne.jp",
    "gender": "Female",
    "university": "Universidad Cientifica Latinoamericana de Hidalgo"
  }, {
    "first_name": "Naoma",
    "last_name": "Bithell",
    "email": "nbithell4@is.gd",
    "gender": "Female",
    "university": "Kashan University of Medical Sciences"
  }, {
    "first_name": "Adore",
    "last_name": "Spaldin",
    "email": "aspaldin5@wunderground.com",
    "gender": "Female",
    "university": "Canisius College"
  }]

  const columns = [
    {
      title: 'อีเมล',
      dataIndex:"email"
    },
    {
      title: 'เพศ',
      dataIndex:'gender'
    },
    {
      title: "ชื่อจริง",
      dataIndex: "first_name"
    },
    {
      title: "นานสกุล",
      dataIndex: "last_name"
    },
    {
      title: "มหาวิทยาลัย",
      dataIndex: "university"
    }
  ]
  return (
    <div className="App">
      Abt Design Table
      <Row justify={"center"}>
        <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>
          <Table bordered={true} columns={columns} dataSource={student} size={"small"}/>
        </Col>
      </Row>
      <Table bordered={true} columns={columns} dataSource={student} size={"small"}/>

      <Row justify="left">
        <Col md={20}> 
          <Form {...layout} onFinish={onFinish}>
            <Form.Item 
            label="ชื่อ"
            name= "name"
            rules={[
              {required: true, message:"ต้องกรอกข้อมูลช่องนี้"},
              {max: 6, min:3, message: "ชื่อต้องอยู่ระหว่าง 4 ถึง 20 อีกษร"}]}> 
              <Input placeholder="ชื่อ-นามสกลุ"/>
            </Form.Item >
            <Form.Item 
            label="เบอร์ติดต่อ" 
            name="phoneNumber"
            rules={[
              {len: 10, message: 'เบอร์ของคุณไม่ถูกต้อง'}
            ]}>
              <Input placeholder="0987654321"/>
            </Form.Item>
            <Form.Item 
            label="อีเมล" 
            name="email"
            rules={[
              {type:'email', message: "รูปแบบผิด", required: true, message:'ต้องใส่อีเมล'}
            ]}>
              <Input placeholder="name@exsample.com"/>
            </Form.Item>
            <Form.Item 
            label="รหัสผ่าน" 
            name="password" 
            rules={[
              {required: true, message: '0-9 A-Z a-Z'},
              {min: 8, max: 20, message: 'รหว่าง 8  ถึง 20 ต้วอักษร'}
            ]}>
              <Input placeholder="A-Z a-z " type='password'/>
            </Form.Item>
            <Button htmlType="summit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
