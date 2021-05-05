import React from 'react';
import './App.scss';
import {EnterLayout} from "./hoc/Enter-layout";
import {MainLayout} from "./hoc/Main-layout";
import {SignUpPage} from "./pages/sign-up/SignUpPage";
import {Main} from "./pages/main/Main";

function App() {
  return (
      <EnterLayout>
        <SignUpPage />
      </EnterLayout>
      //   <MainLayout>
      //       <Main />
      //   </MainLayout>
  );
}

export default App;
