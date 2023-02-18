import { useState } from 'react'
import {
  Link,
  Outlet,
} from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from 'react-pro-sidebar';

import { Row, Col } from 'react-bootstrap';

import Nav from '../components/Navbar'
import IconLeft from '../components/Caret'
import Footer from '../components/Footer';

export default function Root() {
  return (
    <Col sm={12}>
      <Nav />
      <Row className={'vh-100'}>
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
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: 'white',
              },
              [`.${menuClasses.label}`]: {
                // Clip is and scroll on x axis
                overflowX: 'scroll',
                textOverflow: 'clip',
                fontSize: 12,
                // Wrap the text in submenu
                whiteSpace: 'break-spaces',
              },
              [`.${menuClasses.label}::-webkit-scrollbar`]: {
                display: 'none',
              },
              [`.${menuClasses.menuItemRoot}`]: {
                // border: '1px solid red'
                // borderLeftWidth: 1,
                // borderLeft: 'red',
              },
            }}
          >
            <Menu>
              <MenuItem component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                MVP
              </MenuItem>
              <IconLeft label="Alpha">
                <MenuItem
                  className='submenu'
                  component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}
                >
                  Product Market Fit
                </MenuItem>
                <MenuItem
                  className="submenu"
                  component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}
                >
                  How is Product-Market Fit Measured?
                </MenuItem>
                <IconLeft label="Bravo">
                  <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}>
                    Product Market Fit
                  </MenuItem>
                  <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                    How is Product-Market Fit Measured?
                  </MenuItem>
                  <IconLeft label="Charlie">
                    <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vRbQsv2Jt8kx0VEDz8DODDHiSmMw_jRwXE3yksdgRoCUn-S0GQBuzyyttCj9h4m5vdQh2q0t7-ae_f4`} />}>
                      Product Market Fit
                    </MenuItem>
                    <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                      How is Product-Market Fit Measured?
                    </MenuItem>
                  </IconLeft>
                </IconLeft>
              </IconLeft>
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
      <Footer />
    </Col>
  )
}
