import React, { Component } from "react";

class ContactCard extends Component {
  render() {//spits out to browser
    return (//return jsx or some code 
      <div>
        <h1>Displaying {this.props.name} info:</h1>
        <h3>------------------------------------------</h3>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Mobile: {this.props.mobile}</li>
          <li>Work: {this.props.work}</li>
          <li>Email: {this.props.email}</li>
          <li>Github: {this.props.github} </li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;
