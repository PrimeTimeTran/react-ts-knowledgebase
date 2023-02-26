import { useState } from 'react'
import {
  Link,
  useNavigate
} from "react-router-dom";

import { SubMenu, Sidebar, Menu, MenuItem, sidebarClasses, menuClasses } from 'react-pro-sidebar';

import IconLeft, { CaretOpen, CaretRight } from './Caret'

const items = [
  {
    label: 'Những thứ cơ bản',
    url: '',
    submenu: [
      {
        label: 'Khởi nghiệp là gì',
        url: '2PACX-1vQGgH5HglrtN4H6m1W_0Z35TNpdEBNuGxLaSY_CfN9fnFMV4XbUgVhCFzAxt6IEoAPetUgLX8ZbktZx',
      },
      {
        label: 'Các giai đoạn khởi nghiệp',
        url: '2PACX-1vTdE4TjDe2T9nu4TPGBf4Zz9uSbFewv0MzSLsW86PsOBWN1O0Ho8RrIKEhkv4VcGnJBF2qWDI25mU0k',
      },
      {
        label: 'Tham gia một công ty khởi nghiệp',
        url: '2PACX-1vS3KLyYbO5XMyRFiQNGtztww7Qp8LggbjrCEiMex6h2oxT2XxDrkiUK7Wk3gJqx3k3R4JYuEIiZyi_h',
      },
      {
        label: 'Tại sao nên làm việc tại một công ty khởi nghiệp',
        url: '2PACX-1vR2-lurxR7npZ_qKp3ZjwLeNH4Pxemq9QRfUxfkoxiTyOL5g2BQbuZJaLeeLCafnO13N8mahXVYRTn6',
      },
      {
        label: 'Tại sao không nên làm việc tại một công ty khởi nghiệp',
        url: '2PACX-1vQClV-Ohy0oBTqL9lfsMVppUc8G1PvqWMMjsPnHsuakjUL5-XK8yS0SwKXZkXgADxBR-wJU-dRHhBb6',
      },
      {
        label: 'Viết một sơ yếu lý lịch tuyệt vời',
        url: '2PACX-1vQoOnwOMVGkMZ21cOvNwZUcnVJ8tMPvsG1oNZq3S4JCgvBVsMWwP8t6AkniFAb8HvUc49UJ4ccFmsB8',
      },
    ]
  },
  {
    label: 'Lời khuyên khởi nghiệp',
    url: '',
    submenu: [
      {
        label: 'Tạo ra thứ gì đó mà mọi người yêu thích',
        url: '2PACX-1vSbtgVLsGMWZlnYt2syAmFLeSSLzXes-4aJOZnYxrYCW8p19-XCLwbUYulCCBAjm1tcbVUGqB27SOEZ',
      },
      {
        label: 'Làm những việc không mở rộng quy mô',
        url: '2PACX-1vQQnr_xn8doZtiZnFLkk-kStIbQLu7EXylC5_eZRFo2LA4Y-d-nIn_6jxGsgyATElv6_9UJDTDQiBhR',
      },
      {
        label: 'Suy thoái kinh tế',
        url: '2PACX-1vQIyPlYTQdwGxWh-G96_LkhVKeibe9VwJq8XG2Dn27CahLNL-iRqX-uJSCa6K0dTnyDtrW7Ac-O31m3',
      },
      {
        label: 'Không ngừng chăm chỉ',
        url: '2PACX-1vTwpqNR2nI12ULj9jzHfKeMfaRwuXhD8aZZ-PGSo0Bt6V0dJjDrrgjK1_PmgYeh0d-wafHL-jfCsftX',
      },
      {
        label: 'Công ty khởi nghiệp phát triển nhanh chóng',
        url: '2PACX-1vQKlGhuwHQlZ5zT41IzE4SF7SUFDseY5zPLbXC2CFLbPLtYvv6im4IBNHJ74La22ZPJwlcOk-Cx7o45',
      },
      {
        label: 'Khởi nghiệp = Tăng trưởng',
        url: '2PACX-1vTjrPn6szVpKKNloxqG8OnQokG7i1bMzUDmQz82VbY6B3QJY1bMNwfC0MGy8TeNfYyKuq0sh6KvaDL4',
      },
      {
        label: '90/10 Giải pháp',
        url: '2PACX-1vT3xcjBHOd0UuUPAT00ALl8-51KeWOWHRrOtYnalsXgtwnD3Yt5DQFKhKY8yV6pP44OcFOSt9NqZqve',
      },
    ]
  }
]

type SubmenuProps = {
  label: string;
  url: string;
  submenu: {
    label: string;
    url: string
  }[];
}

function Submenu(props: { i: SubmenuProps }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const onClick = (url: string) => {
    setOpen(!open)
    if (props.i.url) {
      navigate(`posts/${url}`)
    }
  }

  return (
    <li>
      <span onClick={() => onClick(props.i.url)}>
        {open ? <CaretOpen /> : <CaretRight />}
        {props.i.label}
      </span>
      {open && <ul className="submenu">
        {props.i.submenu && props.i.submenu.map(s => <li onClick={() => navigate(`posts/${s.url}`)}>{s.label}</li>)}
        <ul className="submenu">
          {items.map((i: SubmenuProps) => (
            <Submenu i={i} key={i.label} />
          ))}
        </ul>
      </ul>}
    </li>
  )
}

export default function Aside() {
  return (
    <div>
      <ul>
        {items.map((i: SubmenuProps) => (
          <Submenu i={i} key={i.label} />
        ))}
      </ul>
    </div>
  )


  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'white',
        },
        [`.${menuClasses.label}`]: {
          // Scroll x axis for sidebar menu items
          overflowX: 'scroll',
          textOverflow: 'clip',
          fontSize: 12,
          // Wrap submenu text
          whiteSpace: 'break-spaces',
        },
        [`.${menuClasses.label}::-webkit-scrollbar`]: {
          display: 'none',
        },
      }}
    >
      <Menu>
        <IconLeft label="Những thứ cơ bản">
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQGgH5HglrtN4H6m1W_0Z35TNpdEBNuGxLaSY_CfN9fnFMV4XbUgVhCFzAxt6IEoAPetUgLX8ZbktZx`} />}>
            Khởi nghiệp là gì
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vTdE4TjDe2T9nu4TPGBf4Zz9uSbFewv0MzSLsW86PsOBWN1O0Ho8RrIKEhkv4VcGnJBF2qWDI25mU0k`} />}>
            Các giai đoạn khởi nghiệp
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vS3KLyYbO5XMyRFiQNGtztww7Qp8LggbjrCEiMex6h2oxT2XxDrkiUK7Wk3gJqx3k3R4JYuEIiZyi_h`} />}>
            Tham gia một công ty khởi nghiệp
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vR2-lurxR7npZ_qKp3ZjwLeNH4Pxemq9QRfUxfkoxiTyOL5g2BQbuZJaLeeLCafnO13N8mahXVYRTn6`} />}>
            Tại sao nên làm việc tại một công ty khởi nghiệp
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQClV-Ohy0oBTqL9lfsMVppUc8G1PvqWMMjsPnHsuakjUL5-XK8yS0SwKXZkXgADxBR-wJU-dRHhBb6`} />}>
            Tại sao không nên làm việc tại một công ty khởi nghiệp
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQoOnwOMVGkMZ21cOvNwZUcnVJ8tMPvsG1oNZq3S4JCgvBVsMWwP8t6AkniFAb8HvUc49UJ4ccFmsB8`} />}>
            Viết một sơ yếu lý lịch tuyệt vời
          </MenuItem>
        </IconLeft>
      </Menu>
      <Menu>
        <IconLeft label="Lời khuyên khởi nghiệp">
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vSbtgVLsGMWZlnYt2syAmFLeSSLzXes-4aJOZnYxrYCW8p19-XCLwbUYulCCBAjm1tcbVUGqB27SOEZ`} />}>
            Tạo ra thứ gì đó mà mọi người yêu thích
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQQnr_xn8doZtiZnFLkk-kStIbQLu7EXylC5_eZRFo2LA4Y-d-nIn_6jxGsgyATElv6_9UJDTDQiBhR`} />}>
            Làm những việc không mở rộng quy mô
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQIyPlYTQdwGxWh-G96_LkhVKeibe9VwJq8XG2Dn27CahLNL-iRqX-uJSCa6K0dTnyDtrW7Ac-O31m3`} />}>
            Suy thoái kinh tế
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vTwpqNR2nI12ULj9jzHfKeMfaRwuXhD8aZZ-PGSo0Bt6V0dJjDrrgjK1_PmgYeh0d-wafHL-jfCsftX`} />}>
            Không ngừng chăm chỉ
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQKlGhuwHQlZ5zT41IzE4SF7SUFDseY5zPLbXC2CFLbPLtYvv6im4IBNHJ74La22ZPJwlcOk-Cx7o45`} />}>
            Công ty khởi nghiệp phát triển nhanh chóng
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vTjrPn6szVpKKNloxqG8OnQokG7i1bMzUDmQz82VbY6B3QJY1bMNwfC0MGy8TeNfYyKuq0sh6KvaDL4`} />}>
            Khởi nghiệp = Tăng trưởng
          </MenuItem>
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vT3xcjBHOd0UuUPAT00ALl8-51KeWOWHRrOtYnalsXgtwnD3Yt5DQFKhKY8yV6pP44OcFOSt9NqZqve`} />}>
            90/10 Giải pháp
          </MenuItem>

          <IconLeft label="Lời khuyên khởi nghiệp">
            <MenuItem className="submenusubmenu">Submenu 1 </MenuItem>
            <MenuItem className="submenusubmenu">Submenu 2 </MenuItem>
            <SubMenu className="submenusubmenu" label={'Submenu 3'}>
              <MenuItem className="submenusubmenusubmenu">Submenu 3.1 </MenuItem>
              <MenuItem className="submenusubmenusubmenu">Submenu 3.2 </MenuItem>
            </SubMenu>
          </IconLeft>

        </IconLeft>
      </Menu>
      <Menu>
        <IconLeft label="Gọi vốn">
          <MenuItem className="submenu" component={<Link to={`posts/2PACX-1vQGgH5HglrtN4H6m1W_0Z35TNpdEBNuGxLaSY_CfN9fnFMV4XbUgVhCFzAxt6IEoAPetUgLX8ZbktZx`} />}>
            Khởi nghiệp là gì
          </MenuItem>
        </IconLeft>
      </Menu>
    </Sidebar>
  )
}