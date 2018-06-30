var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className='text-center page-title'>About</h1>
    <p> It is a weather app built using React </p>
    <p> Here are some tools used:</p>

    <ul>
      <li><a href='https://facebook.github.io/react'>React</a> - JS Framework used </li>
      <li><a href='http://openWeatherMap.org'>OpenWeatherMap</a> -  API used for fetching weather</li>
    </ul>
    <p><br /><a href='https://gauravadhikari.com'>Gaurav Adhikari</a> You may check my website here!</p>
    </div>
  );
};

module.exports = About;
