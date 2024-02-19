// import React from 'react'


interface ButtonProps {
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'}: ButtonProps) => {
  return (
    <button className = {`btn ${color}`} onClick={onClick}>{children}</button>
  )
}

export default Button