import React, {Component} from 'react';

export default class NavLink extends Component {

    render() {
        const {href, text, active} = this.props;
        return(
            <li className="nav__item" onClick={() => console.log('Done')}>
                <a  href={href} 
                    className={`nav__link ${active ? 'active': null}`}>
                    {text}
                </a>
            </li>
        );
    }
}
