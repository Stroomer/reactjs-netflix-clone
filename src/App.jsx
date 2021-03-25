import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import Students from './components/Students.jsx';

import './App.css';

class App extends React.Component {
  state = {
    students: [
      { name:'brian',     gender:'m', group:'3wdv1', photo:'s001.jpg', id:1 },
      { name:'tamara',    gender:'v', group:'3wdv1', photo:'s002.jpg', id:2 },
      { name:'gerwin',    gender:'m', group:'3wdv1', photo:'s003.jpg', id:3 },
      { name:'steven',    gender:'m', group:'3wdv1', photo:'s004.jpg', id:4 },
      { name:'raoul',     gender:'m', group:'3wdv1', photo:'s005.jpg', id:5 },
      { name:'emma',      gender:'v', group:'3wdv2', photo:'s006.jpg', id:6 },
      { name:'susan',     gender:'v', group:'3wdv1', photo:'s007.jpg', id:7 },
      { name:'dimitri',   gender:'m', group:'3wdv2', photo:'s008.jpg', id:8 },
      { name:'paula',     gender:'v', group:'3wdv2', photo:'s009.jpg', id:9 },
      { name:'gio',       gender:'m', group:'3wdv2', photo:'s010.jpg', id:10 },
      { name:'robin',     gender:'m', group:'3wdv2', photo:'s011.jpg', id:11 },
      { name:'walter',    gender:'m', group:'3wdv2', photo:'s012.jpg', id:12 },
      { name:'stephanie', gender:'v', group:'3wdv1', photo:'s013.jpg', id:13 },
      { name:'simon',     gender:'m', group:'3wdv1', photo:'s014.jpg', id:14 },
      { name:'valeri',    gender:'v', group:'3wdv2', photo:'s015.jpg', id:15 },
      { name:'tim',       gender:'m', group:'3wdv2', photo:'s016.jpg', id:16 },
      { name:'wouter',    gender:'m', group:'3wdv2', photo:'s017.jpg', id:17 },
      { name:'sander',    gender:'m', group:'3wdv1', photo:'s018.jpg', id:18 },
      { name:'chris',     gender:'m', group:'3wdv1', photo:'s019.jpg', id:19 },
      { name:'sandra',    gender:'v', group:'3wdv1', photo:'s020.jpg', id:20 },
      { name:'brendan',   gender:'m', group:'3wdv2', photo:'s021.jpg', id:21 },
      { name:'shirley',   gender:'v', group:'3wdv1', photo:'s022.jpg', id:22 },
      { name:'keesjan',   gender:'m', group:'3wdv2', photo:'s023.jpg', id:23 },
      { name:'brit',      gender:'v', group:'3wdv2', photo:'s024.jpg', id:24 },
      { name:'simone',    gender:'v', group:'3wdv1', photo:'s025.jpg', id:25 },
      { name:'arnold',    gender:'m', group:'3wdv2', photo:'s026.jpg', id:26 },
      { name:'stijn',     gender:'m', group:'3wdv1', photo:'s027.jpg', id:27 },
      { name:'zeger',     gender:'m', group:'3wdv2', photo:'s028.jpg', id:28 },
      { name:'fabian',    gender:'m', group:'3wdv1', photo:'s029.jpg', id:29 },
      { name:'mark',      gender:'m', group:'3wdv1', photo:'s030.jpg', id:30 },
    ],
    filter: '',
    result: []
  }  
  render() {
    return (
      <div className="App-container">
        <SearchBar />
        <Students students={this.state.students} />
      </div>
    )
  }
}

export default App;