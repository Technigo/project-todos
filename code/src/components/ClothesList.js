import React from 'react';
import { useSelector } from 'react-redux';

const ClothesList = () => {
  const clothesList = useSelector((store) => store.thing.items)
  return (
    <section>
      <ul>
        {clothesList.map((singleclothes) => {
          return <li key={singleClothes.id}>{singleClothes.name}</li>
        })}
      </ul>
    </section>
    )
}

export default TaskList;