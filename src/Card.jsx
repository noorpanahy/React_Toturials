import react from "./assets/react.svg";

function Card(){

    return(
        <div className="Card">
            <img src={react} className="card-image" alt="My Profile" />
            <h2 className="card-title">
            Noor Alhuda
            </h2>
            <p className="card-text">
            this is my first project
            </p>
    </div>
    );


}

export default Card