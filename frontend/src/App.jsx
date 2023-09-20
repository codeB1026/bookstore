import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookForm from './components/bookform'
import BookTable from './components/bookstable'

function App() {

  return (
    <>
      <BookForm />
      <BookTable />
    </>
  )
}

export default App
