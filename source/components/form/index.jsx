import React, { useState } from 'react'
import style from './style'
import propTypes from 'prop-types'

const Form = props => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [birth, setBirth] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.setData({
      name,
      lastName,
      age,
      birth,
      description
    })
    e.target.reset()
    setDescription('')
  }

  return (
    <form className={style.content} onSubmit={handleSubmit}>
      <input
        velue={name}
        onChange={e => setName(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Nombre'
      />
      <input
        velue={lastName}
        onChange={e => setLastName(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Apellidos'
      />
      <input
        velue={age}
        onChange={e => setAge(e.target.value)}
        className={style.input}
        type='number'
        placeholder='Edad'
      />
      <input
        velue={birth}
        onChange={e => setBirth(e.target.value)}
        className={style.input}
        type='date'
        placeholder='fecha de nacimiento'
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        className={style.textarea}
        type='number'
        placeholder='description'
      />
      <button
        type='submit'
        className={style.button}
      >
        Guarda
      </button>
    </form>
  )
}

Form.propTypes = {
  setData: propTypes.func
}
export default Form
