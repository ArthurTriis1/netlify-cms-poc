import React from "react"
import Image, { ImageProps } from "../Image"
import * as S from './styles'

export type PostCardProps = {
    image: ImageProps['image']
    title: string
    time: number
    slug: string
}

const PostCard = ({ slug, ...props}:PostCardProps) => {
    return (
        <S.WrapperLink to={slug}>
            <PostCardWithoutLink {...props} />
        </S.WrapperLink>
    )
}

export const PostCardWithoutLink = ({image, title, time }: Omit<PostCardProps, 'slug'>) => {
    return (
        <S.Wrapper>
            <Image image={image}/>
            <S.DataWrapper>
                <S.Title>{title}</S.Title>
                <S.TimeWrapper><S.Time>{time} minuto de leitura</S.Time></S.TimeWrapper>
            </S.DataWrapper>
        </S.Wrapper>
    )
}

export default PostCard