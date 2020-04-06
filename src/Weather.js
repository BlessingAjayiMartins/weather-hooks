// TODO display weather for the users
import React from 'react';

const Weather = ({description, city, country, error, temperature}) => {
  return (
    <div>
      {city && country && <p>{city}, {country}</p>}
      {temperature && <p>{temperature} F</p>}
      {description && <p> Conditions: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Weather;