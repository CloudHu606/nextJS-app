import App from 'next/app';
import React from 'react';
import ReduxStore from '../ReduxStore';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default ReduxStore(MyApp);
