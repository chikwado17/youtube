import React, { Component } from 'react';
import './VideoItem.css';

class VideoListItems extends Component {

    handleSelectVideo = (video) => {
        this.props.onVideoSelect(video);
    }

    render() {
        const { video } = this.props;
        return (
            <div onClick={() => this.handleSelectVideo(video)} className="ui relaxed divided list">
               <div className="video-item item">
                    <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
                    <div className="content">
                        <div className="header">
                            {video.snippet.title}
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default VideoListItems;
