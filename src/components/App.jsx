import React, { Component } from 'react';
import SearchBar from './searchBar/SearchBar';
import VideoList from './videos/VideoList';
import VideoDetail from './videos/VideoDetail';

import youtube from './apis/YoutubeApi';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onFormSubmit = async (term) => {
     const response = await youtube.get('/search', {
            params: {
                q:term
            }
        });
        this.setState({
            videos: response.data.items
        });
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo:video
        });
    }

    render() {
        const { videos } = this.state;
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        )
    }
}
export default App;
