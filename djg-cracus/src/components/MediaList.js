import MediaItem from './MediaItem'

const MediaList = ({videos}) => {
    const renderedList = videos.map((video, idx) => {
        return <MediaItem video={video} key={idx} />
    })

    return (
        <>
            {renderedList}
        </>
    )
}

export default MediaList