import React from 'react'
import PostTemplate from '../../templates/PostTemplate'
import {marked} from 'marked'

const PostPagePreview = ({ entry, getAsset }: any) => {
    const data = entry.getIn(['data']).toJS()
    const image = getAsset(data.thumb)
    return (<PostTemplate thumb={image} title={data.title} html={marked.parse(data.body)} />)
}

export default PostPagePreview