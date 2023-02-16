import {
  Link,
  Outlet,
} from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from 'react-pro-sidebar';

import { Row, Col } from 'react-bootstrap';

import Nav from '../components/Navbar'

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
}
// https://fontawesomeicons.com/svg/icons/layout-sidebar-reverse
export const BarChart: React.FC<IconProps> = ({ size = 18, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V2z"></path>
    </svg>
  );
};

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
                overflowX: 'scroll',
                textOverflow: 'clip',
              },
              [`.${menuClasses.label}::-webkit-scrollbar`]: {
                display: 'none',
              },
              [`.${menuClasses.icon}`]: {

              }
            }}
          >
            <Menu>
              <MenuItem icon={<BarChart />}
                component={<Link to={`posts/2PACX-1vRw4Y8-rAKlBgO4_KgfnHa4tV8I0xT-26c9Erf7zXKl-_G3nRjBTTzy5eDtOe32txP4-LfMMNNESSis`} />}>
                MVP
              </MenuItem>
              <SubMenu
                label="Charts"
              >
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
  )
}
