import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { BsMoon, BsSun } from 'react-icons/bs'

export const ColorModeSwitcher = props => {
    const {toggleColorMode} = useColorMode()
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(BsSun, BsMoon)

    return (
        <IconButton 
            size='lg'
            fontSize='lg'
            variant='ghost'
            color='current'
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            {...props}
        />
    )

}