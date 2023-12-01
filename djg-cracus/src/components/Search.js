
import {useState} from 'react'

const Search = ({addMe, onSearchBarChange}) => {
    // searchTerm = variable, setSearchTerm = function
    const [searchTerm, setSearchTerm] = useState('')
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