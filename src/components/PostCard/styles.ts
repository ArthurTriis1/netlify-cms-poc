import { Link } from "gatsby";
import tw from "twin.macro";

export const WrapperLink = tw(Link)`
    w-full md:w-96 rounded my-3 md:m-3
`

export const Wrapper = tw.div`
    w-full md:w-96 rounded overflow-hidden shadow-lg my-3 md:m-3
`

export const DataWrapper = tw.div`
    px-6 py-4
`

export const Title = tw.h1`
    font-bold text-xl mb-2
`

export const Time = tw.span`
    inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2
`

export const TimeWrapper = tw.span`
    pt-4 pb-2
`

export const PostsList = tw.div`
    mx-auto
    w-full
    p-4
    md:w-4/5
    md:p-8
    flex
    justify-evenly
    flex-wrap
`