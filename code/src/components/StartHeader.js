import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

import Input from 'components/Input'

const StartHeader = () => {
  const [visible, setVisible] = useState(true)

  const handleStartButton =() => {
    if (visible) {
      setVisible()
    } else {
      return setVisible(false)
    }
  }
  return (
    <header className='start-header'>
      <h1>No To-Do's!</h1>
      { visible ?   
        <Button 
          variant='contained' 
          color='secondary'
          onClick={handleStartButton} 
        >
          Add task
        </Button> : 
      <Input /> }
    </header>
  )
}

export default StartHeader