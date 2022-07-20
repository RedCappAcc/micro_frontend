import React, {useEffect, useRef} from "react";
import { mount } from 'dashboard/DashboardApp'

const Dashboard = ()=>{
  const ref = useRef(null)
  useEffect(()=>{
    mount(ref.current)
  },[])

  return <div ref={ref}/>
}

export default Dashboard