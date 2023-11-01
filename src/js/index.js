//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (<div className="justify-content-center bg-dark d-flex flex-row  p-5">
		        <div className="clock m-auto shadow-lg p-5"><Badge bg="dark"><h1><FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}}/></h1> </Badge> </div>
                <div className="sixDigit text-white m-auto shadow-lg p-5" ><Badge bg="dark"><h1>{props.digitSix % 10}</h1></Badge></div>
                <div className="fiveDigit text-white m-auto shadow-lg p-5"><Badge bg="dark"><h1>{props.digitFive % 10}</h1></Badge></div>
		        <div className="fourDigit text-white m-auto shadow-lg p-5"><Badge bg="dark"><h1>{props.digitFour % 10}</h1></Badge></div>
		        <div className="threeDigit text-white m-auto shadow-lg p-5"><Badge bg="dark"><h1>{props.digitThree % 10}</h1></Badge></div>
		        <div className="twoDigit text-white m-auto shadow-lg p-5"><Badge bg="dark"><h1>{props.digitTwo % 10}</h1></Badge></div>
		        <div className="oneDigit text-white m-auto shadow-lg p-5"><Badge bg="dark"><h1>{props.digitOne % 10}</h1></Badge></div>
	        </div>);
};

SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}

let counter = 0;
setInterval(function(){
    const six = Math.floor (counter/100000);
    const five = Math.floor (counter/10000);
    const four = Math.floor (counter/1000);
    const three = Math.floor (counter/100);
    const two = Math.floor (counter/10);
    const one = Math.floor (counter/1);
    counter++;

    ReactDOM.render(<SimpleCounter digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
        digitSix={six}
    />, document.querySelector("#app"));

},1000);


