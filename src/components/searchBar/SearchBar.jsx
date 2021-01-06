import React, { Component } from 'react';


class SearchBar extends Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    render() {
        const { term } = this.state;
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;