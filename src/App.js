import React from "react";
import { render } from "react-dom";
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <Counter />
      <p id="copyright">© 2020 - a product form <a href="https://darbaz.design" target="_blank">Darbaz Ali</a></p>
    </div>
  );
};

render(<App />, document.getElementById("root"));
