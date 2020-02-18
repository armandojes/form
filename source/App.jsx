import React, { useState } from 'react'
import style from './style'
import Form from './components/form'
import User from './components/user'

const App = props => {
  const [data, setData] = useState(null)

  return (
    <main className={style.container}>
      <Form setData={setData} />
      <User data={data} />
    </main>
  )
}

export default App
