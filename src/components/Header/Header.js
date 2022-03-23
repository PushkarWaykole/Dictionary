import React from 'react'
import './Header.css'
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import categories from '../../data/category';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
export const Header = ({ category, setCategory,word,setWord }) => {

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
      secondary: {
        main: green[500],
      },
    },
  });

  const handleChange=(language) =>{
    setCategory(language)
    setWord("")
  }
  return (
    <div className='header'>
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word" variant="standard" 
            value={word}
            onChange={(e)=>setWord(e.target.value)}
            />

          <TextField
            select
            className='select'
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            

          >
            {
              categories.map((option) => (

                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))
            }

          </TextField>

        </ThemeProvider>
      </div>
    </div>
  )
}
