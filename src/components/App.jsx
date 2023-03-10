import React, { Component } from 'react';
import { GlobalStyles } from 'GlobalStyles.styled';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { fetchPhotos } from 'photoAPI/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    modalImage: '',
    showModal: false,
    totalHits: 0,
  };

  componentDidUpdate = (_, prevState) => {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });
      fetchPhotos(this.state.query, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            images:
              this.state.page === 1
                ? [...data.hits]
                : [...prevState.images, ...data.hits],
            totalHits:
              this.state.page === 1
                ? data.totalHits - data.hits.length
                : data.totalHits - [...prevState.images, ...data.hits].length,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  toggleModal = modalImage => {
    if (!modalImage) {
      this.setState({ modalImage: '', showModal: false });
      return;
    }
    this.setState({ modalImage, showModal: true });
  };

  render() {
    return (
      <Wrapper>
        <GlobalStyles />
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} openModal={this.toggleModal} />
        {!!this.state.totalHits && (
          <ButtonLoadMore onLoadMore={this.handleLoadMore} />
        )}
        {this.state.showModal && (
          <Modal
            modalImage={this.state.modalImage}
            closeModal={this.toggleModal}
          />
        )}
      </Wrapper>
    );
  }
}
