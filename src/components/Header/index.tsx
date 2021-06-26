import react from 'react';
import logo from '../../assets/logo.png';
import logoPokeApi from '../../assets/pokeapi_logo.png';
import { HeaderNav } from './style.';

type headerPropsType = {
    isScrolled: boolean
}
export const Header = ({ isScrolled }: headerPropsType) => {

    return (
        <HeaderNav className={isScrolled ? 'white' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>

        </HeaderNav>
    )
}