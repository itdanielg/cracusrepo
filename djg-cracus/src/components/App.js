import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

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
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/clicker">Clicker</Link></li>
                    <li><Link to="/test">Testing</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/test" >
                    <div>Here is some test JSX</div>
                </Route>
            </Switch>
            <Switch>
                <Route path="/" exact>
                    <div>
                        <h1>React App</h1>
                        <Search onSearchBarChange={getVideosFromSearch} addMe={1 + 4} firstName="Nicole" lastName="Kidmans" />
                    </div>
                    <div>
                        <MediaDetail selectedVideo={selectedVideo} />
                    </div>
                    <MediaList videos={videos} onVideoSelect={videoParam => {setSelectedVideo(videoParam)}} />
                </Route>
            </Switch>
           
        </BrowserRouter>
    )
}

export default App