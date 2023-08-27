import React from "react";
import Row from "./Row";

import requests from "./requests";

const App = () => {
  return (
    <>
      <h2>HEllo Hanif</h2>
      <Row tittle="Action" fetchUrl={requests.fetchAction} />

      {/* <Row tittle="Action" fetchUrl={requests.fetchActionAndAdventure} /> */}
    </>
  );
};

export default App;
