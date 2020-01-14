import React from 'react';
import { initializeStore } from './store';

export default App => class AppwithRedux extends React.Component {

    static async getInitalprops() {
        const store = initializeStore();

        return {
            initialReduxState: store.getState(),
        }
    }

    constructor(props) {
        super(props);
        this.reduxStore = initializeStore(props.initialReduxState);
    }

    render() {
        return <App {...this.props} reduxStore={this.reduxStore} />;
    }

}