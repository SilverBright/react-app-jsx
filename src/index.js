// Import React & ReactDom libraries
// import Variable from 'library';
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
  return <div>Hello World!</div>;
};

// Take the react component and show on the screen
// document.querySelector references index.html line 26: <div id="root"></div>
ReactDOM.render(<App />, document.querySelector('#root')
);