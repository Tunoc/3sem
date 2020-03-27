import React from 'react';
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curTime: new Date().toLocaleTimeString() };
  }
  render() {
    return (<div>
      <p>When you pressed the button the time was: {this.state.curTime}</p>
      <button onClick={() => this.setState({ curTime: new Date().toLocaleTimeString() })}>
        Get time here.
        </button>
    </div>);
  }
}
