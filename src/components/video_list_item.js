import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const videoImageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoImageUrl} />
                </div>

                <div className="media-body">
                    <h4 className="media-heading">{videoTitle}</h4>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;