import React from 'react'
import '../sass/Loader.css';

const Loader = ({ loader }) => {
    return (
        <>
            {
                loader && <div className='bg-loader'>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden" >Loading...</span>
                    </div>
                </div>
            }
        </>
    )
}

export default Loader