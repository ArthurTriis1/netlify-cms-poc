import React from 'react'
import { PostCardProps } from '../../components/PostCard'
import HomeTemplate from '../../templates/HomeTemplate'
import WithStyled from '../utils/WithStyled'
import { PreviewTemplateComponentProps } from 'netlify-cms-core'

const grayLink = "https://www.macmillandictionary.com/us/external/slideshow/thumb/Grey_thumb.png"

const HomePagePreview = ({ entry, getAsset, ...props }: PreviewTemplateComponentProps) => {
    console.log(entry, props)
    const data = entry.getIn(['data']).toJS()
    const image = getAsset(data.image)
    const posts: PostCardProps[] = [
        {title: 'Mocked Post 1', slug: 'mocked-post-1/', image: {url: grayLink}, time: 23},
        {title: 'Mocked Post 2', slug: 'mocked-post-2/', image: {url: grayLink}, time: 12},
        {title: 'Mocked Post 3', slug: 'mocked-post-3/', image: {url: grayLink}, time: 34},
        {title: 'Mocked Post 4', slug: 'mocked-post-4/', image: {url: grayLink}, time: 44}
    ]
    return (
    <WithStyled>
        <HomeTemplate posts={posts} image={getAsset(data.image)} title={data.title} />
    </WithStyled>
    )
}

export default HomePagePreview