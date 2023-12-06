const MediaDetail = ({selectedVideo}) => {
        if(!selectedVideo) {
            return
        }
    
        return (
            <video width="500" height="500" src={selectedVideo.videos.tiny.url} controls/>
        )
}

export default MediaDetail