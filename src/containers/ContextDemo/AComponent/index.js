import React, { createContext, useState } from 'react';
import { ThemeContext, themes } from '../theme-context';
import BComponent from '../BComponent';


// export const ThemeContext = createContext('red');

console.log('ThemeContext:', ThemeContext);
export default () => {
  const [theme, setTheme] = useState(themes);
  const [count, setCount] = useState(1);

  const handleSetCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h5>A Component {count}</h5>
      <ThemeContext.Provider value={{
        theme,
        handleSetCount
      }}>
        <BComponent />
      </ThemeContext.Provider>
    </div>
  )
}

