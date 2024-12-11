import { createContext, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Show from './Show.jsx'
import * as streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "3b83fab814msh5ec971d4deb5626p13e72ejsn614a6e4f0387";
const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	apiKey: RAPID_API_KEY
}));

export const ShowContext = createContext(false)
export const SelectedShowContext = createContext(null)
export const MovieIndexContext = createContext(0)
export const SearchInputFieldContext = createContext('')

function App() {
  const [topShows, setTopShows] = useState();

  const [showOnList, setShowOnList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedShow, setSelectedShow] = useState()
  const [movieIndex, setMovieIndex] = useState(0)
  const [searchInputField, setSearchInputField] = useState("")

  const showImages = showOnList.map(show => show.imageSet.horizontalPoster.w1440)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await client.showsApi.searchShowsByTitle({
          country: "ph",
          title: searchInputField,
        });
        setShowOnList(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTopShows = async () => {
      try {
        const data = await client.showsApi.getTopShows({
          country: "ph",
          service: "netflix",
        });
        setTopShows(data)
        setShowOnList(data);
      } catch (error) {
        console.error(error);
      }
    };

    searchInputField ? fetchShows() : fetchTopShows();
  }, [searchInputField]);

  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <SearchInputFieldContext.Provider value={[searchInputField, setSearchInputField]}>
        <MovieIndexContext.Provider value={[movieIndex, setMovieIndex]}>
          <SelectedShowContext.Provider value={[selectedShow, setSelectedShow]}>
            <ShowContext.Provider value={[showModal, setShowModal]}>
              <Header />
              <Cards shows={showOnList} topShows={topShows} />
              <Show showImages={showImages} index={movieIndex} />
            </ShowContext.Provider>
          </SelectedShowContext.Provider>
        </MovieIndexContext.Provider>
      </SearchInputFieldContext.Provider>
    </div>
  )
}

export default App
