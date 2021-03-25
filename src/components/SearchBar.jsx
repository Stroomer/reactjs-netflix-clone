import React, { Component } from 'react';

class SearchBar extends Component {
    handleSubmit = (event) => {
        console.log(event.target);
    }
    
    handleChange = (event) => {
        console.log(event.target);

        ///// Stel dat je state.filter wilt ophalen
        ///// Dat mag je zo doen...

        // const str = this.state.filter;
        
        ///// ...alleen bevindt state.filter zich in App.jsx en hoe los je dat dan op?
        ///// De nette manier van het wegschrijven van een nieuwe state is als volgt:

        // this.setState({filter:event.target.value});  // <--- Juiste manier voor het veranderen van this.state
        
        ///// Je gebruikt dus this.setState() maar je kan er nog steeds niet bij want het staat in App.jsx
        ///// Een veel gemaakte beginnersfout bij React is het 'mutaten' van de state, dat doe je zo:

        // this.state.filter = event.target.value;      // <--- Dit is dus fout, niet doen! Gebruik setState({variabele: 'nieuwewaarde'})

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default SearchBar;