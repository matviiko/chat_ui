import React from 'react';
import './App.scss';
import {EnterLayout} from "./hoc/Enter-layout";
import {MainLayout} from "./hoc/Main-layout";
import {Main} from "./pages/main/Main";
import {SignInPage} from "./pages/sign-in/SignInPage";
import Switch from "react-bootstrap/Switch";
import {Redirect, Route} from 'react-router-dom';
import {SignUpPage} from "./pages/sign-up/SignUpPage";


function App() {
  return (
      <Switch>
          <Route exact path="/" render={() => <Redirect to="/register"/>}/>
          <Route
              path="/register"
              render={() => <EnterLayout>
                                <SignUpPage/>
                            </EnterLayout>}
          />
          <Route
              exact
              path="/login"
              render={() => <EnterLayout>
                                <SignInPage/>
                          </EnterLayout>}
          />
          <Route
              exact
              path="/home"
              render={() => <MainLayout>
                                <Main />
                            </MainLayout>
              }
          />
      </Switch>
  );
}

export default App;
