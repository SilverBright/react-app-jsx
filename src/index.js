// Import React & ReactDom libraries
// import Variable from 'library';
import React from 'react';
import ReactDOM from 'react-dom'; 

// Create a React component
const App = () => {
  const buttonText = 'Click Me!';
  // An opening tag needs to be on the same line as 'return' or you will get 'undefined'.
  return (
  <div>
    <label className="label" htmlFor="name">
      Enter Name
      </label>
    <input id="name" type="text" />
    {/* <button style='background-color: blue; color: white;'>Submit</button> */}
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
  </div>
  );
};

// Take the react component and show on the screen
// document.querySelector references index.html line 26: <div id="root"></div>
ReactDOM.render(<App />, document.querySelector('#root')
);