import React from "react";
import "./styles/App.css";
import { BaseLayout, Landing } from "./components";

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Landing />
      </BaseLayout>
    </div>
  );
}

export default App;
