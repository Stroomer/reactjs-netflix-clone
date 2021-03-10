import React from 'react';
import '../css/App.css';

class App extends React.Component {
  render() {

    const mystyle = {
      color: 'white',
      backgroundColor: 'blue',
      padding: '20px', 
      fontFamily: 'Arial'
    };

    return (
      <>
        <h2 style={mystyle}>Hallo boilerplate!</h2>
        <div className="myclass"></div>
      </>
    )
  } 
}

export default App;