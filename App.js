import React from 'react'
import Splash from './aplkasi/Splash'
import Navigation from './aplkasi/Navigation'

class App extends React.Component {
  
  state = {
    component: 
    <Splash />
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        component: <Navigation />
      })
    }, 1000);
  }

  render() {
    return (this.state.component)
  }
}

export default App