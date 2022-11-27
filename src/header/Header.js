import React,{ useContext} from 'react'

import { ThemeContext } from '../themeSettings/themeContext'

import { Button } from '@material-ui/core'

export default function Header() {
  const {theme,setTheme}=useContext(ThemeContext)

  const handleTheme=()=>theme === "dark" ? setTheme("light") : setTheme("dark");


  return (
    <div className='h-40 w-40 bg-black text-stone-100 dark:bg-white'>
      <Button className='dark:bg-white dark:text-blue-300' onClick={handleTheme}>dark</Button>
  
    </div>
  )
}
