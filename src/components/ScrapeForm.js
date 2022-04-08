import React from "react";

class ScrapeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://www.robcallaghan.co.uk/blog/margin-collapsing-explained-with-examples/",
      title: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.url);
    this.getTitle(this.state.url);
    // this.props.setTitle(this.state.title);
    event.preventDefault();
  }

  getTitle(url) {
    return (
      fetch(`https://cors-anywhere.herokuapp.com/${url}`)
        .then((response) => response.text())
        //   .then((html) => console.log(html))
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const title = doc.querySelectorAll("title")[0];
          // console.log(title.innerText);
          return this.setState({ title: title.innerText }, () => {
            this.props.setTitle(this.state.title);
          });
          //   return title.innerText;
        })
    );
  }

  render() {
    return (
      <div>
        <h2> ScrapeForm Component</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            URL:
            <input
              type="text"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ScrapeForm;
