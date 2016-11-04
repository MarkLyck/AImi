import React from 'react'
import AimiImage from '../../../public/Aimi_Image.jpg'
import './styles/styles.css'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img src={AimiImage} alt="Aimi" className="profile-pic"/>
        <h3>Aimi</h3>
      </nav>
    )
  }
}

export default NavBar
