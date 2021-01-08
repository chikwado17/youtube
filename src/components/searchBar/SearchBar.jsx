import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        const { term } = this.state;
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label className="text-upper">Youtube video Search</label>
                        <input type="text" value={term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;