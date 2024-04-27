import React from 'react'

function Btn({ BtnStyle: { BtnStyle, btnText } }) {
  return (
    <button className={BtnStyle}>{btnText}</button>
  )
}

export default Btn