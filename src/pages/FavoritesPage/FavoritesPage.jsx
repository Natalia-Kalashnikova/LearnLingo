import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../../redux/selectors/card.selectors.js';
import TeachersCard from '../../components/TeacherCard/TeacherCard.jsx';
import { nanoid } from 'nanoid';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favoriteCard = useSelector(selectFavorites);

  return (
    <main className={css.main}>
      <h2 className={css.title}>Favorites</h2>
      {favoriteCard.length > 0 ? (
        <ul className={css.cardsList}>
          {favoriteCard.map((card) => (
            <li className={css.cardsItem} key={nanoid()}>
              <TeachersCard card={card}/>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.errorText}>
          Oops! It looks like you haven&apos;t added any teachers to your favorites
          yet, so we can&apos;t display what isn&apos;t there. Add some favorites and
          come <Link className={css.accentText} to="/teachers">back!</Link>
        </p>
      )}
    </main>
  );
};

export default FavoritesPage;