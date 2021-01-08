import React, { Component } from 'react';
import SearchBar from './searchBar/SearchBar';
import VideoList from './videos/VideoList';
import VideoDetail from './videos/VideoDetail';

import youtube from './apis/YoutubeApi';
import './searchBar/SearchBar.css';


class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onFormSubmit('ay live');
    }

    onFormSubmit = async (term) => {
     const response = await youtube.get('/search', {
            params: {
                q:term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
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
            <div className="search-bar ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row stackable">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
