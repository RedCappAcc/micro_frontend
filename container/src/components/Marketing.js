import React, { useRef, useEffect } from "react";
import { mount } from 'marketing/MarketingApp'


const Marketing = ()=>{
  const ref = useRef(null)

  useEffect(()=>{
    mount(ref.current)
  },[])

  return <div ref={ref}/>
}

export default Marketing