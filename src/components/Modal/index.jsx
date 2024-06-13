import { Component } from "react";

export default class Modal extends Component {


  handleKeyDown = (evt) => {
    if (evt.keyCode === 'Escape') {
      this.props.onClose();
      }
      

  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        const { src, alt, onClose } = this.props;

        return (
          <div className="overlay" onClick={onClose}>
            <div className="modal">
              <img src={src} alt={alt} />
            </div>
          </div>
        );
    }
}