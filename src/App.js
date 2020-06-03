import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import './App.css';

class App extends Component {
  render() {
    return(
    <>

    <ContactCard
    name="Risu"
    mobile= "(718)-552-1294"
    work="(212)-331-2367"
    email="summerTime@gmail.com"
    github="https://github.com/Risu"
/>
    </>
    )
  }
}

export default App;
