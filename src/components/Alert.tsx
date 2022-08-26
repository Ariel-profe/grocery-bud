import React, { FC, useEffect } from 'react';


interface Props {
  msg: string;
  type: string;
  list: {}[];
  removeAlert: (show?: boolean, type?: string, msg?: string) => void
}

export const Alert:FC<Props> = ({msg, type, removeAlert, list}) => {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert()
    }, 3000);

    return () => clearTimeout(timeOut)
  }, [list])
  

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}
