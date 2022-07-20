import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';


const mount = (el,{changeBrowserHistory, initialPath, signIn} )=>{
  const history = process.env.NODE_ENV === 'development'? createBrowserHistory(): createMemoryHistory({
    initialEntries: [ initialPath ]
  })

  const changeMemoryHistory = (nextPathname)=>{
    const pathname= history.location.pathname
    if(pathname !== nextPathname){
      history.push(nextPathname)
    }
  }

  ReactDOM.render(<App history={history} signIn={signIn}/>,el)
  history.listen((location)=>changeBrowserHistory(location.pathname))

  return changeMemoryHistory
}

if(process.env.NODE_ENV === 'development'){
  const container = document.querySelector('#auth')
  if(container){
    mount(container,{})
  }
}

export { mount }