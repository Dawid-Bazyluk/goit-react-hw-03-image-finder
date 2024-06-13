import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import styles from "./Aplication.module.scss";
import { Component } from "react";

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImageUrl: '',
  };
  handleSearchSubmit = query => {
    console.log("submited", query)
  // this.setState({query, page: 1})
}
  render() {
    return (<div className={styles.App}>
      <Searchbar onSubmit={this.handleSearchSubmit} />
      {/* <ImageGallery /> */}
    </div>)
  }
  };
