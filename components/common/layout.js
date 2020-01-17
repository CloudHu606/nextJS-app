import React from 'react';
import Nav from '../header/nav';
import Head from 'next/head';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Head>
                    <script src="https://kit.fontawesome.com/909502ba15.js" crossorigin="anonymous"></script>
                </Head>
                <Nav />
                {this.props.children}

                <style jsx>
                    {`
                     .container {
                         display: flex;
                     }
                   
                   `}
                </style>
            </div>
        )

    }

}

export default Layout;