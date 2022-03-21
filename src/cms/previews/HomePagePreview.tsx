import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate'

const HomePagePreview = ({ entry, getAsset }: any) => {
    const data = entry.getIn(['data']).toJS()
    const image = getAsset(data.image)
    console.log(image)
    return (<HomeTemplate image={getAsset(data.image)} title={data.title} subtitle={data.subtitle}/>)
}

export default HomePagePreview