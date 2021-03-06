import React from 'react'

import './TrendingVidCard.scss'

const TrendingVidCard = props => {
    const vidData = props.videosData;

    return (
        <div className="trending-vid-card">
            <div className="img-container">
                <div>
                    <img src={`https://img.youtube.com/vi/${vidData.videoId}/mqdefault.jpg`} alt={vidData.title} />
                    <p className="duration">{vidData.duration}</p>
                </div>
            </div>
            <div className="details">
                <h3>{vidData.title}</h3>
                <p>{vidData.channelName} <span className="s-circle"></span> {vidData.viewCount} <span className="s-circle"></span> {vidData.datePosted}</p>
                <p>{vidData.description}</p>
            </div>
        </div>
    )
}

export default TrendingVidCard
