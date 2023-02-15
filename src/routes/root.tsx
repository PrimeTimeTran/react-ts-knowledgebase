import {
  Link,
  Outlet,
} from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';

import { Container, Row, Col } from 'react-bootstrap';


import Nav from '../components/Navbar'
import style from '../../node_modules/dom-helpers/cjs/css.d';

export default function Root() {
  return (
    <Container fluid>
      <Col>
        <Row>
          <Nav />
        </Row>
        <Row className={'row vh-100'}>
          <div id="sidebar">
            <div>
              <form id="search-form" role="search">
                <input
                  id="q"
                  aria-label="Search contacts"
                  placeholder="Search"
                  type="search"
                  name="q"
                />
                <div id="search-spinner" aria-hidden hidden={true} />
                <div className="sr-only" aria-live="polite"></div>
              </form>
              <form method="post">
                <button type="submit">New</button>
              </form>
            </div>
            <Sidebar>
              <Menu>
                <MenuItem component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                  MVP
                </MenuItem>
                <SubMenu label="Charts">
                  <MenuItem component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}>
                    Product Market Fit
                  </MenuItem>
                  <MenuItem component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                    How is Product-Market Fit Measured?
                  </MenuItem>
                  <SubMenu label="Charts">
                    <MenuItem component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}>
                      Product Market Fit
                    </MenuItem>
                    <MenuItem component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                      How is Product-Market Fit Measured?
                    </MenuItem>
                    <SubMenu label="Charts">
                      <MenuItem component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}>
                        Product Market Fit
                      </MenuItem>
                      <MenuItem component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                        How is Product-Market Fit Measured?
                      </MenuItem>
                    </SubMenu>
                  </SubMenu>
                </SubMenu>
                <MenuItem component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}>
                  Go to Market Strategy
                </MenuItem>
                <MenuItem component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                  Sales and Engagement
                </MenuItem>
              </Menu>
            </Sidebar>
          </div>
          <div id="detail">
            <Outlet />
          </div>
        </Row>
      </Col>
    </Container>
  )
}
