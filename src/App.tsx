import React from 'react';
import './App.scss';
import {EnterLayout} from "./hoc/Enter-layout";
import {MainLayout} from "./hoc/Main-layout";
import {SignUpPage} from "./pages/sign-up/SignUpPage";
import {Main} from "./pages/main/Main";
import {connect} from "react-redux";
import {AppState} from "./store";
import {register} from "./actions/auth";
import {Dispatch} from "redux";
import {SignInPage} from "./pages/sign-in/SignInPage";


function App() {
  return (
      <EnterLayout>
        <SignInPage/>
      </EnterLayout>
      //   <MainLayout>
      //       <Main />
      //   </MainLayout>
  );
}

export default App;
