import React from 'react'
import propTypes from 'prop-types'
import style from './style'

const User = props => {
  if (!props.data) {
    return null
  }

  return (
    <div className={style.content}>
      <div className={style.row}>
        <span>Nombre: </span>{props.data.name}
      </div>
      <div className={style.row}>
        <span>Apellidos: </span>{props.data.lastName}
      </div>
      <div className={style.row}>
        <span>Edad: </span>{props.data.age}
      </div>
      <div className={style.row}>
        <span>Fecha de nacimiento: </span>{props.data.birth}
      </div>
      <div className={style.row}>
        <div>Desacripcion: </div>{props.data.description}
      </div>
    </div>
  )
}

User.propTypes = {
  data: propTypes.object
}

export default User
