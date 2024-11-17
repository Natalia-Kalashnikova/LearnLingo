import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/teachers">Teachers</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            </nav>
        </header>
    );
};

export default Header;