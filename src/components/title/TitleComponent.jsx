import React from 'react'
import { Helmet } from 'react-helmet'

const TitleComponent = ({ title }) => {
    const defaultTile = 'AASE';
    return (
        <Helmet>
            <title>{title} - {defaultTile}</title>
        </Helmet>
    )
}

export default TitleComponent
