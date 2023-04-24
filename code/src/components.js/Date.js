/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';

export const H = styled.h5`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  color:var(--primaryBlack);
  border: 1.3px solid var(--primaryBlack);
  border-radius: 5px 20px 5px 20px;
  padding: 10px 25px;
  font-size: 24px;
  text-align: center;
  display:flex;
  justify-content: center;

`

export default function DateToday() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
  return (
    <div className="date-box">
      <H>Today is {date}</H>
    </div>
  );
}