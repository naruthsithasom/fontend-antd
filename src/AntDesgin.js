import React from 'react'
import { Table, Button, Row, Col } from 'antd'
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
    title: "ชื่อจริง",
    dataIndex: 'email'
  },
  {
    title: 'เพศ',
    dataIndex: 'gender'
  },
  {
    title: 'นามสกุล',
    dataIndex: 'last_name'
  },
  {
    title: 'มหาวิทยาลัย',
    dataIndex: 'university'
  }
]
function AppDesign() {
  return (
    <div>
      <h1>Test Ant AppDesign</h1>
      <div>
        <Row justify="center">
          <Col span={20}>
            <Table columns={columns} dataSource={student} />
          </Col>
        </Row>
      </div>
      <Button >OK</Button>
      <div>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    </div>
  )
}
export default AppDesign