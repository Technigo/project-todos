import React from 'react'

const Empty = ({ selectedTab }) => {
  console.log('selectedTab Empty:', selectedTab);
  return (
    <div className="blobcontainer">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFD6E8" d="M52.6,-70.5C66.6,-62.3,75.2,-44.8,72.6,-29.2C70.1,-13.6,56.2,0.1,50.7,16.2C45.1,32.4,47.9,51,40.8,60C33.7,69.1,16.9,68.6,3.2,64.2C-10.5,59.9,-21.1,51.7,-32.6,44.1C-44.1,36.5,-56.6,29.5,-59.3,19.6C-62,9.8,-54.9,-2.9,-49.6,-15.2C-44.3,-27.5,-40.9,-39.5,-32.9,-49.7C-25,-59.9,-12.5,-68.2,3.4,-72.9C19.3,-77.6,38.6,-78.7,52.6,-70.5Z" transform="translate(100 100)" />
      </svg>
      {selectedTab === 'all' && <p>Nothing to show here. Start adding your todos!</p>}
      {selectedTab === 'done' && <p>Yay you! All your todos are complete. <span role="img">🎉</span></p>}
      {selectedTab === 'notDone' && <p>Nothing to show here. Start completing your todos!</p>}
    </div>
  )
}

export default Empty