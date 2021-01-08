import React from 'react';

export const Video = () => {

    const vidStyles = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }

    const vidNr = `v(${Math.floor(Math.random() * 15) + 1})`

    return (
        <video style={vidStyles} muted loop autoPlay>
            <source src={require(`../assets/vids/${vidNr}.mp4`)} type="video/mp4" />
        </video>
    )
}