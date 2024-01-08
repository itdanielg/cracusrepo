import MediaItem from './MediaItem'
import { Grid } from '@chakra-ui/react'

const MediaList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video, idx) => {
        return <MediaItem video={video} key={idx} onVideoSelect={onVideoSelect} />
    })

    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
            }}
            gap={6}
        >
            {renderedList}
        </Grid>
    )
}

export default MediaList