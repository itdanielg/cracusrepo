import {useState, useEffect} from 'react'

// react router dom
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

//loadable
import loadable from '@loadable/component'

// import custom theme
import customTheme from '../customTheme'

// import ColorModeSwitcher
import { ColorModeSwitcher } from '../ColorModeSwitcher'

import {ChakraProvider, theme} from '@chakra-ui/react'

// components
import MediaList from './MediaList'
import MediaDetail from './MediaDetail'
import { LoginContext } from '../contexts/LoginContext'
import Profile from './Profile'
import Login from './Login'

//import Search from './Search'

// api
import pixabay from '../api/pixabay'


const Search = loadable(() => import('./Search'))

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [username, setUsername] = useState(null);

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
        <ChakraProvider theme={customTheme}>
            <ColorModeSwitcher />
            <LoginContext.Provider value={{username, setUsername}}>
                {username != null ? <Profile/> : <Login/>}
            
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
            </LoginContext.Provider>
        </ChakraProvider>
    )
}

export default App