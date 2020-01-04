import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/shared/Header'
import Routes from './routes'

const App = () => {
  const [theme, setTheme] = useState('light')

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.querySelector('body').setAttribute('data-theme', newTheme)
  }

  return (
    <BrowserRouter>
      <div className='container mt-5'>
        <Header theme={theme} onChange={onChangeTheme} />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
