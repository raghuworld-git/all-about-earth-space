import React from 'react';
import { urlType, urlTypeColorAndIcon } from '../../../utils/constants/url'

const URL = ({ type, url }) => {
    const typeSearch = urlType[type];
    if (!typeSearch || !url) return null;
    let linkFormation = null;
    let linkMeta = urlTypeColorAndIcon.filter(x => x.type === typeSearch);
    switch (type) {
        case urlType.link:

            linkFormation = <a href={url} style={{ color: linkMeta?.[0]?.color }} target='_blank' rel="noreferrer">
                <i className={linkMeta?.[0]?.iconClass}></i>
            </a >
            break;
        case urlType.youtube:
            linkFormation = <button class="btn btn-sm" style={{ backgroundColor: linkMeta?.[0]?.color }}
            ><i className={linkMeta?.[0]?.iconClass}></i
            ></button>
            break;
        default:
            break;
    }

    return (
        <>
            {linkFormation}
        </>
    )
}

export default URL
