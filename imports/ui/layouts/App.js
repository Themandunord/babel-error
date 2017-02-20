import React from 'react';

const App = ({ children }) => (
  <div>
    <div>
      { children }
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
