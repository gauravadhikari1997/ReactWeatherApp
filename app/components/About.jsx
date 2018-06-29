var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className='text-center'>About</h1>
    <p> It is a weather app built using React </p>
    <p> Here are some tools used:</p>

    <ul>
      <li><a href='https://facebook.github.io/react'>React</a> - JS Framework used </li>
      <li><a href='http://openWeatherMap.org'>OpenWeatherMap</a> -  API used for fetching weather</li>
    </ul>
    </div>
  );
};

module.exports = About;
