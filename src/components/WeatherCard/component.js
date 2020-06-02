import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highcolor = 0;
  let lowcolor = 0;
  let background = null;
  if (temp > 12) {
    highcolor = (1 - (temp - 12) / 28) * 255;
    lowcolor = highcolor - 150;
    background = `  linear-gradient(to top, rgb(255,${highcolor}, 0), rgb(255,${lowcolor}, 0))`;
  } else {
    highcolor = (1 - (temp + 20) / 32) * 255;
    lowcolor = highcolor - 150;
    background = `  linear-gradient( to top, rgb(0,${highcolor},255), rgb(0,${lowcolor},255))`;
  }
  const Card = styled.div`
    margin: 10 auto;
    background: ${background};
    color: white;
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
