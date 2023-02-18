import { useState } from 'react'
import { SubMenu } from 'react-pro-sidebar';

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
  label?: string;
}

// https://fontawesomeicons.com/svg/icons/layout-sidebar-reverse
export const CaretRight: React.FC<IconProps> = ({ size = 18, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
    </svg>
  );
};

export const CaretOpen: React.FC<IconProps> = ({ size = 18, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
    </svg>
  );
};


export const IconLeft: React.FC<IconProps> = ({ label, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <SubMenu
      label={label}
      icon={open ? <CaretOpen /> : <CaretRight />}
      onOpenChange={() => setOpen(!open)}

    >
      {children}
    </SubMenu>
  );
};

export default IconLeft