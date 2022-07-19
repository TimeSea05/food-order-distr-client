import React from 'react'
import { UsernameContext } from '../../pages/_app'
import DefaultUserAvatar from './DefaultUserAvatar'
import { Divider } from 'rsuite'

import UserInfoTableStyles from '../../styles/UserInfoTable.module.css'

export default function UserInfotable () {
  const { userID, username, email } = React.useContext(UsernameContext)
  return (
    <div className={UserInfoTableStyles['user-info-wrapper']}>
      <div className={UserInfoTableStyles.greetings}>
        <DefaultUserAvatar />
        <span>Hello, {username}.</span>
      </div>
      <Divider />
      <div className={UserInfoTableStyles['basic-info-wrapper']}>
        <h3>Personal Info</h3>
        <div className={UserInfoTableStyles['basic-info']}>
          <ul>
            <li>UserID: {userID}</li>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
