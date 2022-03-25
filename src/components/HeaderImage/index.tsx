import React from "react"
import  Image  from "../Image"
import { ImageProps } from "../Image"
import * as S from './styles'

export type HeaderImageProps = {
    title: string
    thumb: ImageProps['image']
}

const HeaderImage = ({ title, thumb }: HeaderImageProps) => {
    return (
        <S.HeaderWrapper>
            <Image image={thumb}/>
            <S.Head>{title}</S.Head>
        </S.HeaderWrapper>
    )
}

export default HeaderImage