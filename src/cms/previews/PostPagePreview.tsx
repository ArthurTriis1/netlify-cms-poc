import React from 'react'
import PostTemplate from '../../templates/PostTemplate'
import { StyleSheetManager } from 'styled-components'
import {marked} from 'marked'
import WithStyled from '../utils/WithStyled'

const PostPagePreview = ({ entry, getAsset }: any) => {
    const data = entry.getIn(['data']).toJS()
    const image = getAsset(data.thumb)

    return (
    <WithStyled>
        <PostTemplate thumb={image} title={data.title} html={marked.parse(data.body || '')} />
    </WithStyled>
    )
}

export default PostPagePreview