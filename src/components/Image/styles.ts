import { GatsbyImage } from "gatsby-plugin-image";
import tw from "twin.macro";

export const GImage = tw(GatsbyImage)`
    h-96
`

export const Image = tw.img`
    h-96
    min-w-full
    object-cover	
`