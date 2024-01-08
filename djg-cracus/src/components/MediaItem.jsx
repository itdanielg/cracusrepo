import {Text, Img, Flex} from '@chakra-ui/react'

const MediaItem = ({video, onVideoSelect}) => {
    return (
        <>
            <Flex onClick={() => onVideoSelect(video)}
                onClickCapture={() => onVideoSelect(video)}
                align="flex-start"
                justify="space-around"
                border="1px"
                borderColor="gray.200"
                borderRadius="base"
                p="2"
            >
                <Text fontsize="sm">
                    {video.id && <Text as="div">Creator: {video.user}</Text>}
                    <Text as="div">URL: {video.pageURL}</Text>
                    <Text as="div">Number of views: {video.views}</Text>
                </Text>
                <Img src={`https://i.vimeocdn.com/video/${video.picture_id}_140x140`} />
            </Flex>
        </>
    )
}

export default MediaItem