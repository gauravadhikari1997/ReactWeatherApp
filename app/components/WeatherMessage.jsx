var React = require('react');

var WeatherMessage = (props) =>{

    if (props.errorMessage){
      return <h3 className="text-center">Error: {props.errorMessage}.</h3>;
    }else{
      return <h3 className="text-center">It is {props.temp} in {props.location}.</h3>;

    }
}

module.exports = WeatherMessage;
