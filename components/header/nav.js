import React from 'react';
import Link from 'next/link'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { setNav } from '../../store';
import DropDown from '../common/dropdown';
import demo from '../../constant/demomenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            demosOpen: false
        }
    }

    selectedNav = (currentNav) => {
        this.props.setNav(currentNav);
    }

    openDemos(currentNav) {
        this.props.setNav(currentNav);
        this.setState(prevState => ({
            demosOpen: true
        }))
    }

    closeDemos() {
        this.setState({
            demosOpen: false
        })
    }

    render() {
        const { demosOpen } = this.state;

        return (
            <div className='nav-container'>
                <nav id="nav">
                    <div className='each-nav'>
                        <Link href="/">
                            <a className={this.props.nav === 'home' ? "show" : ""} onClick={() => this.selectedNav('home')}>HOME</a>
                        </Link>
                    </div>
                    <div className='each-nav dropdown-parent' onMouseLeave={() => this.closeDemos()}>
                        <Link href="#">
                            <a className={this.props.nav === 'demos' ? "show" : ""} onMouseOver={() => this.openDemos('demos')}>DEMOS {demosOpen ? <span><FontAwesomeIcon icon={faRocket} /></span> : ''}</a>
                        </Link>
                        {demosOpen ? <div className='dropdown-child'><DropDown listNav={demo} /></div> : ''}
                    </div>
                    <div className='each-nav'>
                        <Link href="/about">
                            <a className={this.props.nav === 'about' ? "show" : ""} onClick={() => this.selectedNav('about')}>ABOUT</a>
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
                   //     text-transform: uppercase;
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

                    .dropdown-parent {
                        position: relative;
                    }

                    .dropdown-child {
                        position: absolute;
                        background-color: white;
                        min-width: 160px;
                        width: auto;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                        //margin-top: 12px;
                    }

                    .fa {
                        //width: 10px;
                    }

                    `}
                </style>

            </div >
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



