const MediaDetail = ({selectedVideo}) => {
        if(!selectedVideo) {
            return
        }
    
        return (
            <video src={selectedVideo.videos.tiny.url} controls/>
        )
}

export default MediaDetail