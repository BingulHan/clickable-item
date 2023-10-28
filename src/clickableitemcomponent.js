import React, { useEffect, useState } from 'react'

export default function ClickableItemComponent({ children }) {

  const [onClicked, setClicked] = useState(false);

  function onClickItem() {
    setClicked(!onClicked);
  }

  const [componentVariable, setComponentVariable] = useState({ left: 0, vars: 0 });

  const mouseMoveHandler = (event) => {
    if (onClicked == true) {
      let x = event.clientX;
      let y = event.clientY;
      setComponentVariable({ left: x, top: y });
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler)
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  })

  return <div onClick={(e) => { onClickItem() }} className='absolute' style={{ left: componentVariable.left, top: componentVariable.top }}>
    {children}
  </div>
}
