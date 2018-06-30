var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false,
      errorMessage:undefined
    };
  },
  handleOnSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
     });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
}, function(errorMessage){
      that.setState({
        isLoading: false,
        errorMessage: errorMessage
       });
    });
  },
  render: function(){
    var {errorMessage, isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
            return <h3 className='text-center'>Fetching weather data...</h3>;
      }else if(errorMessage){
          return <WeatherMessage errorMessage={errorMessage} />;
        }else if(temp && location){
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleOnSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
