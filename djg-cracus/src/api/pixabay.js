import axios from 'axios'

const KEY = '40980872-7bf7eaa750ba383c7eed34ac7'

export default axios.create({ // config object
    baseURL: 'https://pixabay.com/api',
    params: {
        key: KEY
    }
})