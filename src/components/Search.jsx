import React, { useContext, useState } from 'react'

// Context & Helpers

import { AnimeContext } from '../context/AnimeContext';
import { InputSearchContext } from '../context/InputSearchContext';
import { LoaderContext } from '../context/LoaderContext';
import { PageContext } from '../context/PageContext';
import { getAnimes } from '../helpers/getAnimes';

const Search = () => {

    const { inputValue, setInputValue } = useContext(InputSearchContext);

    const { setData } = useContext(AnimeContext);

    const { page, setPage } = useContext(PageContext);

    const { setLoader } = useContext(LoaderContext);

    const { getAnimesFunc } = getAnimes(inputValue, page, setData, setLoader);

    const handleSubmit = async (e) => {
        e.preventDefault();
        getAnimesFunc();
        setPage(1);
    }

    const handleGetValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="input-group mb-3 w-50">
            <input
                type="text"
                className="form-control"
                placeholder="Anime"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={handleGetValue}
            />
            <button
                className="btn btn-outline-secondary btn-dark text-light"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    )
}

export default Search