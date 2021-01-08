import React from 'react';
import Iframe from 'react-iframe'


const VideoDetail = ({video}) => {

    if(!video) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="ui embed">
                <Iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;