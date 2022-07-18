import React from 'react'
import { UsernameContext } from '../../pages/_app'
import DefaultUserAvatar from './DefaultUserAvatar'

import UserInfoTableStyles from '../../styles/UserInfoTable.module.css'

export default function UserInfotable () {
  const { username } = React.useContext(UsernameContext)
  return (
    <div className={UserInfoTableStyles['basic-info-wrapper']}>
      <DefaultUserAvatar />
      <span>Hello, {username}.</span>
    </div>
  )
}
