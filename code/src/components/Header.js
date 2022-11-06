import React from 'react';
import moment from 'moment';
import Video from '../Assets/Video.mp4';

const Header = () => {
  const date = new Date();

  return (
    <header>
      <video
        className="heroVideo"
        type="video/mp4"
        src={Video}
        autoPlay
        muted
        loop
        playsinline
      />
      <div className="heroText">
        <h1>My To-Do List</h1>
        <p>{moment(date).format('dddd / MM / YYYY')}</p>
      </div>
    </header>
  );
};

export default Header;
