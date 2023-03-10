import { ButtonLoadMoreSt } from "./Button.styled";

export const ButtonLoadMore = ({ onLoadMore }) => {
    return (
      <ButtonLoadMoreSt type="Button" onClick={onLoadMore}>
        Load More
      </ButtonLoadMoreSt>
    );
  };