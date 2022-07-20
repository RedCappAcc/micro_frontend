import React, {lazy, Suspense, useEffect, useState} from "react";
import {Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName,} from '@material-ui/core/styles';
import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingLazy = lazy(()=>import('./components/Marketing'))
const AuthLazy = lazy(()=>import('./components/Auth'))
const DashboardLazy = lazy(()=>import('./components/Dashboard'))


const history = createBrowserHistory();
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});
const App = ()=>{

  const [ isLogin, setIsLogin ] = useState(false)


  useEffect(()=>{
    if(isLogin){
     history.push('/dashboard')
    }
  },[isLogin])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isLogin={isLogin} onSignOut={()=>setIsLogin(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy history={history} signIn={()=>setIsLogin(true)}/>
              </Route>
              <Route path='/dashboard'>
                { !isLogin && <Redirect to={'/'}/> }
                <DashboardLazy/>
              </Route>
              <Route path="/">
                <MarketingLazy history={history}/>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}

export default App