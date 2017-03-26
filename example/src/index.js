import React from 'react';
import ReactDom from 'react-dom';
import View from '../../dist/index';

const App = () => {
  return (
      <div>
        Hello World
        <View />
      </div>
      )
}

ReactDom.render(<App/>, document.getElementById('app'));

