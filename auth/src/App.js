import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ( { history,signIn } ) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin signIn={signIn}/>
            </Route>
            <Route path="/auth/signup">
              <Signup signIn={signIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};