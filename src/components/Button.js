import React from 'react'

const Button = ({ title, variantClass, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${variantClass}`}>
      {title}
    </button>
  )
}

export default Button
