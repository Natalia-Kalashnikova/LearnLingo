import { Link } from "react-router-dom";
import { ReactComponent as IconLogo } from '../../images/icon/logo.svg';
import css from "./Logo.module.css";

const Logo = () => {
    return (
        <>
            <Link to="/home" className={css.logo}>
                <IconLogo />
                <p className={css.logoText}>LearnLingo</p>
            </Link>
        </>
    );
};

export default Logo;