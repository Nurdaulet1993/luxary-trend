import React, {Component} from 'react';

export default class NavLink extends Component {
    state = {
        active: this.props.active
    }

    onItemClick = () => {
        console.log('work')
        this.setState({
            active: true
        })
    }

    render() {
        const {href, text} = this.props;
        const { active } = this.state;

        let classNames = 'nav__link';

        if (active) {
            classNames += ' active';
        }

        
        return(
            <li className="nav__item" onClick={this.onItemClick}>
                <a  href={href} 
                    className={classNames}>
                    {text}
                </a>
            </li>
        );
    }
}
