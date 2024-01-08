import { extendTheme } from "@chakra-ui/react";

const customConfig = { 
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
        cssVarPrefix: 'djg-prefix'
    },
    colors: {
        white: 'lightblue',
        gray: {
            800: 'gray.800'
        }
    },
    textStyles: {
        redText: {
            color: 'red'
        },
        blueText: {
            color: 'blue'
        }
    }
}

const customTheme = extendTheme(customConfig)

export default customTheme