import React from 'react'
import FullWidthImage from './FullWidthImage'

const HomePagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
    return (<div>
        <FullWidthImage img={getAsset(data.image)} title={data.title} subheading={data.subtitle}/>
    </div>)
}

export default HomePagePreview