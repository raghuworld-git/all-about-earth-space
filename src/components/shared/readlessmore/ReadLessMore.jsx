import React, { useState } from 'react'

const ReadLessMore = ({ textVisibleSize = 100, text = '' }) => {
    const [showText, setShowText] = useState(false);
    return (
        <span>
            {showText === true ? text : `${text.substring(0, textVisibleSize)} ...`}  <button type='button' className='btn btn-outline-primary btn-sm' onClick={() => setShowText(!showText)} >{showText ? 'Read less' : 'Read more'}</button>
        </span>
    )
}

export default ReadLessMore
