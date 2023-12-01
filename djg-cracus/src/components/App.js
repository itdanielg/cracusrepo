import {useState} from 'react'

// components
import Search from './Search'

// api
import pixabay from '../api/pixabay'
import MediaList from './MediaList'

const App = () => {
    const [videos, setVideos] = useState([])

    const getVideosFromSearch = async term => {
        const response = await pixabay.get('/videos', {
            params: {
                q: term
            }
        })
        setVideos(response.data.hits)
        console.log(response)
    }

    return (
        <>
            <div>
                <h1>React App</h1>
                <Search onSearchBarChange={getVideosFromSearch} addMe={1 + 4} firstName="Nicole" lastName="Kidmans" />
            </div>
            <MediaList videos={videos}/>
        </>
    )
}

export default App