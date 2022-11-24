import React from "react";

function Main(props) {
    return (
        <div>
            <div className="section">
                <img src={props.img} alt="spot_photo" className="spot-img" />
                <div className="stuffs">
                    <span class="fa fa-map-marker"></span>
                    <span className="spot">{props.country}</span>
                    <span><a href={props.map} className="map--address">View on Google Maps</a></span>
                </div>
                <h2 className="spot-name">{props.spotname}</h2>
                <h5 className="tour-date">{props.trip.startdate} - {props.trip.enddate}</h5>
                <p className="description">{props.description}</p>
            </div>
            
        </div>
    )
}

export default Main;
