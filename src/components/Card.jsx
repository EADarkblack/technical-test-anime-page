import React from 'react'

const Card = ({ info }) => {

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={info.images.jpg.image_url} className="card-img-top" alt={info.title} style={{ height: "20rem" }} />
            <div className="card-body" style={{ background: info.colorScore }} >
                <h5 className="card-text text-light">
                    {info.isGood}
                </h5>
            </div>
        </div >
    )
}

export default Card