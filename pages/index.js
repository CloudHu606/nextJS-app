import React from 'react';
import Layout from '../components/common/layout';

class Index extends React.Component {

    render() {

        return (
            <Layout>
                <div className='container'>
                    <h1>Home</h1>
                </div>

                <style jsx>
                    {`
                     .container {
                         display: flex;
                     }
                   
                   `}
                </style>
            </Layout>
        )
    }

}

export default (Index);


