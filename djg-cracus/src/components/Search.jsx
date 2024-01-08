
import {useState, useMemo} from 'react'
import useUpdateLogger from '../hooks/use-update-logger'
import { Heading, Input, Container } from '@chakra-ui/react'
import { debounce } from 'lodash'


const Search = ({addMe, onSearchBarChange}) => {
    // searchTerm = variable, setSearchTerm = function
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchBarChange = useMemo(() => debounce(onSearchBarChange, 5000),
     [onSearchBarChange]
    )

    useUpdateLogger(searchTerm, 'Search Term')

    const onInputChange = (searchParam) => {
        setSearchTerm(searchParam)
        debouncedSearchBarChange(searchParam)
    }

    return (
        <>
            <Container>
                <Heading as="h1" textStyle={{ base: 'redText', lg: 'blueText'}}>
                    Search {addMe}
                </Heading>
                <Input
                        type="text" 
                        value={searchTerm}
                        onChange= {e => {onInputChange(e.target.value)}}
                />
            </Container>  
        </>
    )
}

export default Search