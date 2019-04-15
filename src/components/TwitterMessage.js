import React from "react";

class TwitterMessage extends React.Component {
 
  constructor() {
    super();

    this.state = {
      value: ''
    };
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
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
