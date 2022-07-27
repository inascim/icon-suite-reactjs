import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <BaseLayout/>
        </BrowserRouter>
      </div>
  );
}


export default App;
