import React from 'react';
import VideoListItems from './VideoListItems';



class VideoList extends React.Component {

    render(){
        const { videos, onVideoSelect } = this.props;
        return (
            <div>
                {videos.map(video => (
                    <VideoListItems key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
                ))}
            </div>
        );
    }
}

export default VideoList;