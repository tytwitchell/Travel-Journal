import React from 'react'

export default function Main(props){
    return (
        <section className="trip-container">
            <img src={props.imageUrl} className="img-main"/>
            <div className="info-container">
                <div className="location-container">
                    <img src="../images/Path.png" />
                    <span className="location-txt">{props.location}</span>
                    <a href={props.map} className="link-map">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <h4 className="dates">{`${props.startDate} - ${props.endDate}`}</h4>
                <p className="description">{props.description}</p>
            </div>
        </section>
    )
}