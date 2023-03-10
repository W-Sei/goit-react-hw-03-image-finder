import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="Loader">
      <Blocks
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};