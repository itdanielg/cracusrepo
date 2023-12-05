import MediaItem from './MediaItem'

const MediaList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video, idx) => {
        return <MediaItem video={video} key={idx} onVideoSelect={onVideoSelect} />
    })

    return (
        <>
            {renderedList}
        </>
    )
}

export default MediaList