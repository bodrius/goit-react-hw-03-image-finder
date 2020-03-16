import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/searchBar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import axios from "axios";
import Loadered from "./components/loader/Loadered";
import ErrorNotify from "./components/errorNotify/ErrorNotify";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

const KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    searchQuery: "corona virus",
    page: 1,
    galeryItem: [],
    isLoading: false,
    error: null,
    largeImageURL:null,
    openModal: false
  };

  async componentDidMount() {
    await this.startNewImagesSearch();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
    if (searchQuery !== prevState.searchQuery) {
      await this.startNewImagesSearch();
    }
  }

  async startNewImagesSearch() {
    const { searchQuery, page } = this.state;
    const BASE_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12/`;
    this.setState({
      isLoading: true
    });

    await axios
      .get(BASE_URL)
      .then(({ data }) => {
        
        this.setState(prevState => ({
          galeryItem: [...prevState.galeryItem, ...data.hits]
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  onSubmitForm = async e => {
    e.preventDefault();
    await this.setState({
      searchQuery: e.target.elements[1].value
    });
    await this.setState({ galeryItem: [] });
  };

  uploadMoreImg = async () => {
    await this.setState(prevState => ({ page: prevState.page + 1 }));
    await this.startNewImagesSearch();
  };

  setLargeImage = largeImageUrl => {
    this.setState({ largeImageUrl: largeImageUrl });
    this.toggleModal();
  };

toggleModal = () => {
  this.setState(state => ({ openModal: !state.openModal }));
};

  render() {
    const { galeryItem, searchQuery, isLoading, error,largeImageUrl } = this.state;
    return (
      <>
        <div className="App">
          <Searchbar
            onSubmitForm={this.onSubmitForm}
            searchQuery={searchQuery}
          />
          {error && <ErrorNotify error={error.message} />}
          {isLoading && <Loadered />}
          {galeryItem.length > 0 && <ImageGallery galeryItem={galeryItem} onOpen={this.setLargeImage}/>}
          {galeryItem.length > 0 ? (
            <Button uploadMoreImg={this.uploadMoreImg} />
          ) : (
            <ErrorNotify />
          )}
          {this.state.openModal && (
          <Modal url={largeImageUrl} onClose={this.toggleModal} />
        )}
        </div>
      </>
    );
  }
}

export default App;
