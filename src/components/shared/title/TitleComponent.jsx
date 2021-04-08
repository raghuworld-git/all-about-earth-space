import React from 'react'
import { Helmet } from 'react-helmet'

const TitleComponent = ({ title }) => {
    const defaultTile = 'Space Lift';
    return (
        <Helmet>
            <title>{title} - {defaultTile}</title>
        </Helmet>
    )
}

export default TitleComponent
