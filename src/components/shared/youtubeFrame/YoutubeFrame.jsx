import React from 'react'


const YoutubeFrame = ({ url, height = '315', width = '560' }) => {
    return (
        <iframe width={width} height={height} src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default YoutubeFrame
