import React from "react";

class TwitterMessage extends React.Component {
  state = {
    value: '',
  }
  
  constructor() {
    super();

    this.state = {};
  }
  
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="message" id="message"
                 value={this.state.value}
                 onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
