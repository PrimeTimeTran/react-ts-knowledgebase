import { useState } from 'react'
import {
  useNavigate
} from "react-router-dom";

import { CaretOpen, CaretRight } from './Caret'

// @ts-ignore
import { items } from '../utils'

type SubmenuProps = {
  label: string;
  url: string;
  submenu: {
    label: string;
    url: string;
    submenu?: {
      label: string;
      url: string
    }[];
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
        {props.i.submenu && props.i.submenu.map(s => <li key={s.label} onClick={() => navigate(`posts/${s.url}`)}>{s.label}</li>)}
      </ul>}
    </li>
  )
}

export default function Aside() {
  return (
    <ul>
      {items.map((i: SubmenuProps) => (
        <Submenu i={i} key={i.label} />
      ))}
    </ul>
  )
}