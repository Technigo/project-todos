import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import moment from 'moment';
// imported react-moment to display real time, Moment is component
import Moment from "react-moment";

// styling header
const HeaderContainer = styled.header`
		text-align: center;
`;

const Header = () => {
	// update time: https://stackoverflow.com/questions/50081893/reactjs-time-between-dates-in-real-time
	const [dateToFormat, setdateToFormat] = useState(moment().toDate().getTime())

	const updateTime = () => {
	  moment().toDate().getTime()
	}
	setInterval(updateTime, 1000)
  
	useEffect(() => {
	  setdateToFormat(updateTime);
	},[]);


	return (
		<HeaderContainer >
			<h1>TODO APP</h1>
			<Moment 
				interval={1} 
				unit="seconds" 
				format="MMMM Do YYYY &#8226; HH:mm"
				style={{ paddingLeft: '2px', fontSize: "20px" }}>
      {dateToFormat}
      </Moment>

		</HeaderContainer>
	)
};

export default Header;