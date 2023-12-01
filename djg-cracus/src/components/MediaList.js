import MediaItem from './MediaItem'

const MediaList = ({videos}) => {
    const renderedList = videos.map(video => {
        return <MediaItem video={video} />
    })

    return (
        <>
            {renderedList}
        </>
    )
}

export default MediaList