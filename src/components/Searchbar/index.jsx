import { Component } from "react";
import styles from "./Searchbar.module.scss"

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <header className={styles.searchbar}>
            <form className={styles.form}>
                <button type="submit" className={styles.button}>
                    <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
                    className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
