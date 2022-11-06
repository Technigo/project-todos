/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import items from 'reducers/Item';
import { Background, Text } from './Styling/GlobalStyles';

const ItemsList = () => {
  const itemList = useSelector((store) => store.items.items);
  const dispatch = useDispatch();
  const onIsBoughtToggle = (id) => {
    dispatch(items.actions.toggleItem(id));
  }
  const onDeleteItemBtnClick = (itemIndex) => {
    dispatch(items.actions.deleteItem(itemIndex));
  }
  return (
    <Background>
      <section>
        {itemList.map((singleItem, index) => {
          return (
            <article key={singleItem.id}>
              <Text>{singleItem.name}</Text>
              <label>
                <input
                  type="checkbox"
                  checked={singleItem.isBought}
                  onChange={() => onIsBoughtToggle(singleItem.id)} />
              </label>
              <button
                onClick={() => onDeleteItemBtnClick(index)}
                type="button">X
              </button>
            </article>
          );
        })}
      </section>
    </Background>
  )
}

export default ItemsList