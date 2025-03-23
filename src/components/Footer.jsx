import react from "react";

class Footer extends react.Component {
  render() {
    return (
      <footer>
        <h3>My Footer</h3>
        <p>{this.props.propsTambahan}</p>
        <p>{this.props.message}</p>
      </footer>
    );
  }
}
