import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPageContainer}>
      <p className={css.text}>
        Sorry, page is not found! Please go to{' '}
        <Link className={css.link} to="/home">
          Home page
        </Link>
        !
      </p>
    </div>
  );
};

export default NotFoundPage;
