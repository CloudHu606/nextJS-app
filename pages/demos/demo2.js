import React from 'react';
import Layout from '../../components/common/layout';
import fetch from 'isomorphic-fetch';

const url = 'https://reqres.in/api/users';

class Demo2 extends React.Component {

    static async getInitialProps() {
        const data = await fetch(`${url}`);
        const dataJson = await data.json();

        return {
            data: dataJson,
        };
    }

    render() {
        // console.log(this.props.data);

        return (
            <Layout>
                <div className='container'>
                    <h1> Dummy Data</h1>
                    <div>{this.props.data.total}</div>
                </div>

                <style jsx>
                    {`
                     .container {
                         display: flex;
                         flex-direction: column; 
                     }
                   
                   `}
                </style>
            </Layout>
        )
    }

}


export default Demo2;
