
import {useState} from 'react'
import useUpdateLogger from '../hooks/use-update-logger'

const Search = ({addMe, onSearchBarChange}) => {
    // searchTerm = variable, setSearchTerm = function
    const [searchTerm, setSearchTerm] = useState('')

    useUpdateLogger(searchTerm, 'Search Term')

    const onInputChange = (searchParam) => {
        setSearchTerm(searchParam)
        onSearchBarChange(searchParam)
    }

    return (
        <>
            <h1 style={{'backgroundColor': 'yellow'}}>Search {addMe} </h1>
            <input
                type="text" 
                value={searchTerm}
                onChange= {e => {onInputChange(e.target.value)}}
            />
        </>
    )
}

export default Search