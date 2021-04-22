import React from 'react';
import './App.scss';
import {EnterLayout} from "./hoc/Enter-layout";
import {SignUpPage} from "./pages/sign-up/SignUpPage";

function App() {
  return (
      <EnterLayout>
        <SignUpPage />
      </EnterLayout>
  );
}

export default App;
