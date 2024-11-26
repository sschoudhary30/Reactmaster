import React from 'react'
import { useRouteError } from "react-router-dom";  

const Error = () => {

    const err = useRouteError(); 
  return (
    <div>
        <h1>OOP'S!!!! 404</h1>
        <h2> something went worng</h2>
        <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error