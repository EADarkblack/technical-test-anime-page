import React from 'react'

const NoResults = ({ data }) => {
    return (
        <>
            {
                data !== null && <div className='container text-center' style={{ marginTop: '8rem' }}>
                    <h3 className='text-light mb-4'>Sorry! No result found</h3>
                    <img src="/assets/document.png" alt="" style={{ width: '10rem', heigth: '10rem' }} />
                </div>
            }
        </>

    )
}

export default NoResults