import React from 'react';
import Link from 'next/link'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setNav } from '../../store';

class Nav extends React.Component {

    selectedNav = (currentNav) => {
        this.props.setNav(currentNav);
    }

    render() {
        return (
            <div className='nav-container'>
                <nav id="nav">
                    <div className='each-nav'>
                        <Link href="/">
                            <a className={this.props.nav === 'home' ? "show" : ""} onClick={() => this.selectedNav('home')}>Home</a>
                        </Link>
                    </div>
                    <div className='each-nav'>
                        <Link href="/demos/demo1">
                            <a className={this.props.nav === 'demos' ? "show" : ""} onClick={() => this.selectedNav('demos')}>demo1</a>
                        </Link>
                    </div>
                    <div className='each-nav'>
                        <Link href="/about">
                            <a className={this.props.nav === 'about' ? "show" : ""} onClick={() => this.selectedNav('about')}>About</a>
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
                        cursor: pointer;
                        margin: 10px;
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
                        color: grey !important;
                    }

                    `}
                </style>

            </div>
        )

    }

}

const mapStateToProps = ({ nav }) => ({
    nav,
});

const mapDispatchToProps = dispatch => ({
    setNav: bindActionCreators(setNav, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);



