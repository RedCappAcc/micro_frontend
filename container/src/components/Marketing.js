import React, { useRef, useEffect } from "react";
import { mount } from 'marketing/MarketingApp'


const Marketing = ({ history })=>{
  const ref = useRef(null)
  const changeBrowserHistory = (nextPathName)=>{
    const pathname = history.location.pathname
    if(pathname!== nextPathName){
      history.push(nextPathName)
    }
  }

  useEffect(()=>{
    const changeMemoryHistory = mount(ref.current, {changeBrowserHistory,initialPath:history.location.pathname})
    history.listen((location)=>changeMemoryHistory(location.pathname))
  },[])
  return <div ref={ref}/>
}

export default Marketing