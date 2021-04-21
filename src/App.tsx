import React from 'react';
import './App.scss';
import {SignInPage} from "./pages/sign-in/SignIn";
import {EnterLayout} from "./hoc/Enter-layout";

function App() {
  return (
      <EnterLayout>
        <SignInPage />
      </EnterLayout>
  );
}

export default App;
