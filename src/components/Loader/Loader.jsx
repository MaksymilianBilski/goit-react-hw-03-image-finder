import { Circles } from 'react-loader-spinner';
import { Component } from 'react';

export class Loader extends Component {
  render() {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transition: '(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
