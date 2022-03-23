import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import WithStyled from '../utils/WithStyled'

const HomePagePreview = ({ entry, getAsset }: any) => {
    const data = entry.getIn(['data']).toJS()
    const image = getAsset(data.image)
    const posts = [{title: 'Post 1', slug: 'post-1/'}]
    return (<WithStyled>
        <HomeTemplate posts={posts} image={getAsset(data.image)} title={data.title} />
    </WithStyled>)
}

export default HomePagePreview