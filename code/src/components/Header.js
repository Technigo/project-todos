import React from 'react';
import styled from 'styled-components'
import moment from 'moment'

const Header = () => {
  const dateTime = moment().format('dddd, MMM Do')

  return (
    <div>
      <Styleh1>
      BucketList
      </Styleh1>
      <section className="date">
        <StyleP>{dateTime}</StyleP>
      </section>
    </div>
  )
};

const Styleh1 = styled.text`
font-family: 'Gaegu';
font-size: 60px;
font-weight: bold;
`
export const StyleP = styled.text`
font-family: 'Gaegu', cursive;
font-size: 20px;
font-weight: bold;
`
export default Header;