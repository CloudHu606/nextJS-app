import React from 'react';
import { initializeStore } from './store';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
    // if it is server side 
    if (typeof window === 'undefined') {
        return initializeStore(initialState);
    }

    // Create store if unavailable on the client and set it on the window object
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}


export default App => class AppwithRedux extends React.Component {

    static async getinitalProps(appContext) {
        const reduxStore = getOrCreateStore();

        // Provide the store to getInitialProps of pages
        appContext.ctx.reduxStore = reduxStore;

        let appProps = {};
        if (typeof App.getInitialProps === 'function') {
            appProps = await App.getInitialProps.call(App, appContext);
        }

        return {
            ...appProps,
            initialReduxState: reduxStore.getState(),
        };
    }

    constructor(props) {
        super(props);
        this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
        return <App {...this.props} reduxStore={this.reduxStore} />;
    }

}