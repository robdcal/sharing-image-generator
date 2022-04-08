import React from "react";
import "./App.css";
import ImageResult from "./components/ImageResult";
import ScrapeForm from "./components/ScrapeForm";
import ScrapeResult from "./components/ScrapeResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Default Text" };
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(title) {
    this.setState({ title: title });
  }

  // handleTitleChange(event) {
  //   this.setState({ title: event.target.value });
  // }

  render() {
    return (
      <div className="App">
        <ScrapeForm setTitle={this.setTitle} />
        <ScrapeResult
          title={this.state.title}
          handleTitleChange={this.handleTitleChange}
        />
        <ImageResult title={this.state.title} />
      </div>
    );
  }
}

export default App;
