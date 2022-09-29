import React, { useContext, useEffect, useState } from 'react'

// Contexts

import { AnimeContext } from '../context/AnimeContext';
import { PageContext } from '../context/PageContext';
import { getAnimes } from '../helpers/getAnimes';

// Components

import Card from './Card';

// Styles

import '../sass/Slider.css'
import { LoaderContext } from '../context/LoaderContext';

const Slider = ({ data, inputValue }) => {

    const { page, setPage } = useContext(PageContext);

    const { setData } = useContext(AnimeContext);

    const { setLoader } = useContext(LoaderContext);

    const { getAnimesFunc } = getAnimes(inputValue, page, setData, setLoader)

    const handleNext = (e) => {
        if (e.target.name === 'next') {
            setPage(data && data.data.pagination.last_visible_page > page ? page + 1 : page);
        } else {
            page === 1 ? setPage(page) : setPage(page - 1);
        }

    }

    useEffect(() => {
        getAnimesFunc();
    }, [page])

    return (
        <div className='row'>
            <div className='col-xs-12 col-md-12'>
                <div className='container mt-5 flex-cont'>
                    <button onClick={handleNext} name='prev' className={`btn-style ${page === 1 ? 'no-active' : 'active'}`}>
                        <i className="fas fa-angle-left"></i>
                    </button>
                    {
                        data && data.data.data.map((anime) => {
                            return <Card info={anime} key={anime.mal_id} />
                        })
                    }
                    <button onClick={handleNext} name='next' className={`btn-style ${data && data.data.pagination.last_visible_page > page ? 'active' : 'no-active'}`}>
                        <i className="fas fa-angle-right"></i>
                    </button>
                </div >
            </div>
        </div>
    )
}

export default Slider