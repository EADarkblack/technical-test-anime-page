import React, { useState } from 'react'

// Components

import Navbar from './components/Navbar'
import NoResults from './components/NoResults'
import Search from './components/Search'
import Slider from './components/Slider'
import Loader from './components/Loader'

// Contexts

import { AnimeContext } from './context/AnimeContext'
import { InputSearchContext } from './context/InputSearchContext'
import { LoaderContext } from './context/LoaderContext'
import { PageContext } from './context/PageContext'

// Styles

import './sass/App.css';

const App = () => {

  const [data, setData] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const [page, setPage] = useState(1);

  const [loader, setLoader] = useState(false);

  return (
    <AnimeContext.Provider value={{ data, setData }}>
      <InputSearchContext.Provider value={{ inputValue, setInputValue }}>
        <PageContext.Provider value={{ page, setPage }}>
          <LoaderContext.Provider value={{ loader, setLoader }} >
            <Loader loader={loader} />
            <Navbar />
            <img src='/assets/bg.gif' alt="" className='bg-image' />
            <div className='d-flex w-100 justify-content-center' style={{ marginTop: '14rem' }}>
              <Search />
            </div>
            {
              data && data.data.data.length > 0 ? <Slider data={data} inputValue={inputValue} /> : <NoResults data={data} />
            }
          </LoaderContext.Provider>
        </PageContext.Provider>
      </InputSearchContext.Provider>
    </AnimeContext.Provider >
  )
}

export default App
