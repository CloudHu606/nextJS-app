import React from 'react';
import Link from 'next/link';

class DropDown extends React.Component {

    render() {
        const { listNav } = this.props;
        const dropDownNav = listNav.Navs.map(nav => (
            <li className='sub-nav' key={Math.random()}>
                <Link href={nav.link}>
                    <a className=''>
                        {nav.title}
                        <span className="icon">
                            <i className={`${nav.icon}`}></i>
                        </span>
                    </a>
                </Link>
            </li>
        ));
        return (
            <div id="dd" className="drop-down-container">
                <ul>
                    {dropDownNav}
                </ul>
                <style jsx global>
                    {`
                        .drop-down-container {
                            list-style-type: none;
                            color: black;
                            font-size: 1.5vw;
                          //  text-transform: lowercase;
                        }

                        #dd ul {
                            list-style-type: none;
                            margin: 0px 0px 0px 0px;
                            padding-left: 0;
                        }

                        #dd .sub-nav {
                            padding: 5px 0px 5px 0px;
                            border-bottom: 1px solid grey;
                            
                        }

                        #dd a {
                            text-decoration: none;
                        }

                        #dd a:hover {
                            background-color: grey;
                        }

                        .icon {
                            margin-left: 3%;
                        }
                    `}
                </style>

            </div>
        )
    }

}

export default DropDown;