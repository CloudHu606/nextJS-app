import React from 'react';
import Link from 'next/link'

class Nav extends React.Component {

    state = {
        activeNav: { home: true, demos: false, about: false },
    }

    selectedNav = (currentNav) => {
        const newActiveNav = this.setNav(currentNav);
        this.setState({ activeNav: newActiveNav });
        //console.log(newActiveNav);
    }

    setNav = (activeNav) => {
        var tmp = this.state.activeNav;

        for (var key of Object.keys(tmp)) {
            if (key === activeNav) {
                tmp[key] = true;
            } else {
                tmp[key] = false;
            }
        }

        return tmp;
    }

    render() {

        const { activeNav } = this.state;

        return (
            <div className='nav-container'>
                <nav id="nav">
                    <div className='each-nav'>
                        <Link href="/">
                            <a className={activeNav.home ? "show" : ""} onClick={() => this.selectedNav('home')}>Home</a>
                        </Link>
                    </div>
                    <div className='each-nav'>
                        <Link href="/demos/demo1">
                            <a className={activeNav.demos ? "show" : ""} onClick={() => this.selectedNav('demos')}>demo1</a>
                        </Link>
                    </div>
                    <div className='each-nav'>
                        <Link href="/about">
                            <a className={activeNav.about ? "show" : ""} onClick={() => this.selectedNav('about')}>About</a>
                        </Link>
                    </div>
                </nav>



                <style jsx>
                    {`

                    .nav-container  {
                        background-color: #333;
                    }

                    #nav  {
                        display: flex;
                        text-align: center;
                        font-size: 2vw;
                        text-transform: uppercase;
                    }

                    .each-nav {
                        padding: 5px 10px;
                    }

                    .each-nav a {
                        text-decoration: none;
                        color: white;
                    }

                    .each-nav a:hover {
                        background-color: white;
                        color: black;
                    }                    

                     .show  {
                        background-color: gray;
                    }

                    `}
                </style>

            </div>
        )

    }

}

export default Nav;


