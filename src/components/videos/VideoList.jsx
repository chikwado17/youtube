import React from 'react';
import VideoListItems from './VideoListItems';



class VideoList extends React.Component {

    render(){
        const { videos } = this.props;
        return (
            <div>
                {videos.map(video => (
                    <VideoListItems  video={video} />
                ))}
            </div>
        );
    }
}

export default VideoList;