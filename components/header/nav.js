import React from 'react';
import Link from 'next/link'

class Nav extends React.Component {

    render() {
        return (
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/demos/demo1">
                    <a>demo1</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        )

    }

}

export default Nav;


