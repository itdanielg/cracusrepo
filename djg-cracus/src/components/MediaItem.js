const MediaItem = ({video}) => {
    return (
        <>
            <div>
                <ul>
                    <div>Creator: {video.user}</div>
                    <div>URL: {video.pageURL}</div>
                    <div>Number of views: {video.pageURL}</div>
                </ul>
            </div>
        </>
        
    )
}

export default MediaItem