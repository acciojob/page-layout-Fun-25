
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <PageLayout
        header="Welcome to my website"
        children="This is the content of my website"
        footer={`\u00A9 2023 My Website. All rights reserved.`}
      />
    </div>
  );
}

export default App

const PageLayout=({header,children,footer})=>{
  return(
    <div>
      <h1>{header}</h1>
      <p>{children}</p>
      <p>{footer}</p>
    </div>
  )
}