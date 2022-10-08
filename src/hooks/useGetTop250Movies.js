import { useQuery } from 'react-query'
import axios from 'axios'

const fetch = ()=>{
    return axios.get(`https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`)
}

export const useGetTop250Movies = () => {
    return useQuery(
        'top-250-m',
        fetch
    )
}