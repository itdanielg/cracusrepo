import {useEffect} from 'react'

const useUpdateLogger = (value, label) => {
    useEffect(() => {
        console.log(label + ' updated to ')
        console.log(value)
    }, [value])
}

export default useUpdateLogger