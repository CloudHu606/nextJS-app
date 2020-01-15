import React from 'react';
import Nav from '../header/nav';

class Layout extends React.Component {

    render() {

        // header
        return (
            <div>
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