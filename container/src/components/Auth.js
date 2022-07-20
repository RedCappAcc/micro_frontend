import React, { useRef, useEffect } from "react";
import { mount } from 'auth/authForm'


const Auth = ({ history, signIn })=>{
  const ref = useRef(null)
  const changeBrowserHistory = (nextPathName)=>{
    const pathname = history.location.pathname
    if(pathname!== nextPathName){
      history.push(nextPathName)
    }
  }

  useEffect(()=>{
    const changeMemoryHistory = mount(ref.current, {changeBrowserHistory, initialPath:history.location.pathname, signIn})
    history.listen((location)=>changeMemoryHistory(location.pathname))
  },[])

  return <div ref={ref}/>
}

export default Auth