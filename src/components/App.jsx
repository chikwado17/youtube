import React, { Component } from 'react';
import SearchBar from './searchBar/SearchBar';
import VideoList from './videos/VideoList';
import youtube from './apis/YoutubeApi';

class App extends Component {

    state = {
        videos: []
    }

    onFormSubmit = async (term) => {
     const response =  await youtube.get('/search', {

            params: {
                q:term
            }
        });

        this.setState({
            videos: response.data.items
        });
    }

    render() {
        const { videos } = this.state;
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <VideoList videos={videos}/>
            </div>
        )
    }
}
export default App;
