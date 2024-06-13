import { Children, Component } from "react";
import styles from "./ImageGallery.module.scss";

export default class ImageGallery extends Component {
  render() {
    
    return <ul className="gallery">{this.props.children}</ul>;
  }
}
