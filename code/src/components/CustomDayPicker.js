import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css'

const StyledDayPicker = styled(DayPickerInput)`

`

const CustomDayPicker = () => {

  const [dueDate, setDueDate] = useState(new Date())
  return (
    <DayPickerInput onDayChange={date => setDueDate(date)} 
      //selected={dueDate}
      //
      //dateFormat='yyyy/MM/dd'
      //isClearable
    />
  )
}

export default CustomDayPicker