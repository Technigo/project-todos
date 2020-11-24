import React from 'react';

const Today = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()
  if (dd < 10) { dd = 0+dd}
  if (mm < 10) {mm = 0+mm}
  today = dd +'/'+dd+'/'+yyyy

  return (
    <div>
      <p>Today</p>
      <p>{today}</p>
    </div>
    );
}
 
export default Today;