import {useState, useEffect} from 'react'

// components
import Search from './Search'

// api
import pixabay from '../api/pixabay'
import MediaList from './MediaList'
import MediaDetail from './MediaDetail'

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    // useEffect covers componentDidMount, componentWillMount, componentDidUnmount
    useEffect(() => {
        getVideosFromSearch('deer')
    }, [])

    const getVideosFromSearch = async term => {
        const response = await pixabay.get('/videos', {
            params: {
                q: term
            }
        })
        setVideos(response.data.hits)
        setSelectedVideo(response.data.hits[0])
        console.log(response.data.hits)
    }

    // const onVideoSelect = (videoParam) => {
    //     setSelectedVideo(videoParam)
    // }

    return (
        <>
            <div>
                <h1>React App</h1>
                <Search onSearchBarChange={getVideosFromSearch} addMe={1 + 4} firstName="Nicole" lastName="Kidmans" />
            </div>
            <div>
                <MediaDetail selectedVideo={selectedVideo} />
            </div>
            <MediaList videos={videos} onVideoSelect={videoParam => {setSelectedVideo(videoParam)}} />
        </>
    )
}

export default App