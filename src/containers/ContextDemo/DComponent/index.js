import React ,{ useContext } from 'react';
import { ThemeContext } from '../theme-context';
console.log('ThemeContext:', ThemeContext)

const ThemedButtonV1 = (props) => {
  const context = useContext(ThemeContext);
  const { theme, handleSetCount } = context;
  console.log('context:', context)
  // console.log('themeaaa:', theme)
  return (
    <button
      {...props}
      style={{
        background: theme.dark.background
      }}
      onClick={handleSetCount}
    >
      {theme.dark.background}
    </button>
  )
}

export default ThemedButtonV1;
