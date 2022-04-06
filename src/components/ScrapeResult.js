import React from "react";

class ScrapeResult extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { value: "" };

    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleTitleSubmit = this.handleTitleSubmit.bind(this);
  }

  //   handleTitleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  //   handleTitleSubmit(event) {
  //     // alert("A name was submitted: " + this.state.value);
  //     // this.getTitle(this.state.value);
  //     event.preventDefault();
  //   }

  render() {
    return (
      <div>
        <h2>ScrapeResult Component</h2>
        <form onSubmit={this.handleTitleSubmit}>
          <label>
            Page Title:
            <input
              type="text"
              value={this.props.title}
              //   onChange={this.props.handleTitleChange}
            />
          </label>
          <input type="submit" value="Generate Image" />
        </form>
      </div>
    );
  }
}
export default ScrapeResult;
