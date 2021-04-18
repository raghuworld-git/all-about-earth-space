import React, { useState } from 'react'

const ReadLessMore = ({ textVisibleSize = 100, text = '' }) => {
    const [showText, setShowText] = useState(false);
    return (
        <span>
            {showText === true ? text : `${text.substring(0, textVisibleSize)}`}
            {text.length > textVisibleSize ?
                <span onClick={() => setShowText(!showText)} style={{ color: 'grey', cursor: 'pointer' }}>
                    {!showText ? '...read more' : '...show less'}
                </span>
                : ''}
        </span>
    )
}

export default ReadLessMore

