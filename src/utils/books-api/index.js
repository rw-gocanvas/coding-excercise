import { get } from 'axios'

const searchEndpoint = `http://openlibrary.org/search.json`

const searchFields = `fields=title,author_name,first_publish_year,key,cover_i`

const unpackResults = ({ data }) => data

export const bookSearchRequest = query => {
  const searchRequest = `${searchEndpoint}?q=${query}&${searchFields}&limit=15`

  return get(searchRequest).then(unpackResults)
} 