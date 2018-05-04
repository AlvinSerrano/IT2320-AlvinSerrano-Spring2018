import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Learn React</li>
    <li>Become a developer</li>
    <li>Become a hacker</li>
    <li>Create a better Facebook</li>
  </ul>
);

ReactDOM.render(
myList, document.getElementById('app')
);