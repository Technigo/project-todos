import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shoppings } from '../reducers/shoppings'
import { Button } from '../styledComponents/Button'
import { DoubleButtons } from '../styledComponents/DoubleButtons'
import { List } from '../styledComponents/List'
import { ListItem } from '../styledComponents/ListItem'
import { CustomCheckBox } from 'components/CustomCheckBox'  


export const Shop = ({itemIndex}) => {
  const item = useSelector(store => store.shopping.list.items[itemIndex])
  const dispatch = useDispatch()

  const handleOnChange = event => {
    dispatch(shoppings.actions.setDoneShop({
      itemIndex,
      done: !item.done
    }))
  }

  const onRemoveClicked = event => {
    dispatch(shoppings.actions.removeShop({
      itemIndex,
    }))
  }

  return (
    <List>
      <ListItem isChecked={item.done ? 'checked' : ''}
        onChangeHandler={handleOnChange}>{item.description}</ListItem>
      <ListItem isChecked={item.done ? 'checked' : ''}>{item.category}</ListItem>
      <DoubleButtons>
        <CustomCheckBox
          isChecked={item.done ? 'checked' : ''}
          onChangeHandler={handleOnChange}
        />
        <Button onClick={onRemoveClicked}>
          Remove
        </Button>
      </DoubleButtons>
    </List>
  )
}
