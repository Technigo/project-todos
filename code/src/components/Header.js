/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux';

export const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <h1 className="headeTitle">GET THINGS DONE!
        </h1>
      </div>
        
          <AppTitle><TodoIcon src={mainIcon} alt="Todo icon" /> Daily Tasks <TodoIcon src={mainIcon} alt="Todo icon" /></AppTitle>
        </InnerWrapper>
      </h1>
      <OuterWrapper header2>
        <InnerWrapper headerInner2>
          <p>Completed tasks:{' '}
            <span style={{ fontWeight: 600 }}>{completedTasks.length} / {taskList.length}</span>
          </p>
        </InnerWrapper>
      </OuterWrapper>
    </>
  )
}

export default Header
