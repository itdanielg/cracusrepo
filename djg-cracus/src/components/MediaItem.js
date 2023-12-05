const MediaItem = ({video, onVideoSelect}) => {
    return (
        <>
            <div onClick={() => onVideoSelect(video)}>
                <ul>
                    <div>Creator: {video.user}</div>
                    <div>URL: {video.pageURL}</div>
                    <div>Number of views: {video.views}</div>
                    <img src={`https://i.vimeocdn.com/video/${video.picture_id}_140x140`} />
                </ul>
            </div>
        </>
    )
}

export default MediaItem