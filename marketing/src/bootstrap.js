import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';



const mount = (el, {changeBrowserHistory, initialPath})=>{
  const history = process.env.NODE_ENV === 'development'? createBrowserHistory(): createMemoryHistory({
    initialEntries:[initialPath]
  })

  const changeMemoryHistory = (nextPathname)=>{
    const pathname= history.location.pathname
    if(pathname !== nextPathname){
      history.push(nextPathname)
    }
  }

  ReactDOM.render(<App history={history}/>,el)
  history.listen((location)=>changeBrowserHistory(location.pathname))

  return changeMemoryHistory
}

if(process.env.NODE_ENV === 'development'){
  const container = document.querySelector('#_marketing-root')
  if(container){
    mount(container,{})
  }
}

export { mount }