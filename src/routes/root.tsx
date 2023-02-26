import {
  Outlet,
} from "react-router-dom";

import { Row, Col } from 'react-bootstrap';

import Nav from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

export default function Root() {
  return (
    <Col sm={12}>
      <Nav />
      <Row className="vh-100">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </Row>
      {/* <Footer /> */}
    </Col>
  )
}
