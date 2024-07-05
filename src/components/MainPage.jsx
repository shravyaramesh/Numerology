import {GalaxyImage} from "../assets/index";
import "../styles/mainpage.css";
import "../styles/intro.css";
import CustomInput from "./CustomInput";
import {useState} from "react";


export default function MainPage () {

    const [findNumsBtnClicked, setFindNumsBtnClicked] = useState(false);

    const handleFindNumsBtnClick = (e) => {
        e.preventDefault();
        setFindNumsBtnClicked((prevState) => {
            if (prevState) {
                console.log("Button was active");
            }
            if (!prevState) console.log("Button was inactive");
            return !prevState;
        });
    };

    return <div className="background-container">
        <img className="background-image" src={GalaxyImage} alt="galaxy" />
        <div className="main-page-content-container">
            <div className="autoscolling-content-container left"></div>
            <div className="center-content-container">
                <h1>Mystic Numbers</h1>
                {!findNumsBtnClicked ? <div className="intro-section">
                    <p>
                    {"In the intricate web of life, numbers hold cryptic secrets, weaving patterns that echo cosmic mysteries. Birthdates reveal the Life Path Number, guiding one's purpose, while names unveil the Destiny Number, illuminating aspirations. Journey through these realms to uncover hidden truths beneath daily events, entwined in an ancient, enigmatic dance."}
                    </p>
                    <div className="enter-details-container">
                        <CustomInput label="Full Name" />
                        <CustomInput label="Birthdate" />
                    </div>
                </div>: <p>Result</p>}
                <button className="outline" onClick={handleFindNumsBtnClick}>{findNumsBtnClicked ? 'Try again!' : 'Find Your Numbers'}</button>
            </div>
            <div className="autoscolling-content-container right"></div>
        </div>
    </div>
}