import React from 'react';

class Layout extends React.Component {

    render() {

        // header
        return (
            <div>
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