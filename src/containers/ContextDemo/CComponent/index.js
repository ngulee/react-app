import React from 'react';
import { ThemeContext } from '../theme-context';

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let { theme, contextType } = this.context;
    console.log('contextType:', contextType)
    console.log('props:', props)
    return (
      <button
        {...props}
        style={{backgroundColor: theme.light.background}}
      >
        {theme.light.background}
      </button>
    );
  }
}

export default ThemedButton;
