import { useQuery } from 'react-query'
import axios from 'axios'

const fetch = (query)=>{
    return axios.get(`https://imdb-api.com/en/API/${query}/${process.env.REACT_APP_IMDB_API_KEY}`)
}

export const useCallCustomAPI = (query,queryName) => {
    return useQuery(
        queryName,
        ()=>fetch(query)
    )
}