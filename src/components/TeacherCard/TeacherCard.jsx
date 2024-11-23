import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { faker } from '@faker-js/faker';
import { useAuth } from '../../hooks/auth.js';
import { selectFavorites } from '../../redux/selectors/card.selectors.js';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/card/card.reducer';
import { showWarningToast } from '../ErrorMessages/errorMessages.js';
import {
  joinArrayWithComma,
  joinArrayWithSpace,
} from '../../utils/arrayProcessing.js';
import PopUp from '../../components/PopUp/PopUp.jsx';
import BookTrialForm from '../../components/Forms/BookTrialForm.jsx';
import IconHeart from '../../images/icon/heart.svg';
import IconActiveHeart from '../../images/icon/active-heart.svg';
import IconBook from '../../images/icon/book-open.svg';
import IconStar from '../../images/icon/star.svg';
import css from './TeacherCard.module.css';

const TeacherCard = ({ card, selectedLevel }) => {
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    id,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = card;

  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [showReadMore, setShowReadMore] = useState(false);
  const [showBookTrialForm, setShowBookTrialForm] = useState(false);
  const favoriteCards = useSelector(selectFavorites);

  const inFavorites = favoriteCards.some(favorite => favorite.id === id);

  const handleAddToFavorite = () => {
    if (isAuth) {
      dispatch(addToFavorites(card));
    } else {
      showWarningToast('Sorry, only for registered users');
    }
  };

  const handleDeleteFromFavorites = () => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <>
      <div className={css.teachersImgWrp}>
        <img
          className={css.teachersImg}
          src={avatar_url}
          alt={`${name} ${surname}`}
          width={96}
          height={96}
        />
      </div>
      <div className={css.teachersInfoWrp}>
        <div className={css.teachersInfo}>
          <div>
            <p className={css.teachersLang}>Languages</p>
            <h2 className={css.teachersTitle}>
              {name} {surname}
            </h2>
          </div>
          <div className={css.teachersInfoWrapper}>
            <ul className={css.teachersInfoList}>
              <li className={css.teachersInfoItem}>
                <img src={IconBook} alt="Icon Book" />
                Lessons online
              </li>
              <li className={css.teachersInfoItem}>
                Lessons done: {lessons_done}
              </li>
              <li className={css.teachersInfoItem}>
                <img src={IconStar} alt="Icon Star" />
                Rating: {rating}
              </li>
              <li className={css.teachersInfoItem}>
                Price / 1 hour:
                <span className={css.teachersInfoPrice}>{price_per_hour}$</span>
              </li>
            </ul>
            {inFavorites ? (
              <button
                className={css.teachersFavoriteBtn}
                type="button"
                onClick={handleDeleteFromFavorites}>
                <img src={IconActiveHeart} alt="icon Active Heart" />
              </button>
            ) : (
              <button
                className={css.teachersFavoriteBtn}
                type="button"
                onClick={handleAddToFavorite}>
                <img src={IconHeart} alt="" />
              </button>
            )}
          </div>
        </div>
        <div className={css.teachersTextWrapper}>
          <p>
            <span className={css.teachersAccentText}>Speaks:</span>
            <span className={css.teachersUnderlineText}>
              {joinArrayWithComma(languages)}
            </span>
          </p>
          <p>
            <span className={css.teachersAccentText}>Lesson Info:</span>
            {lesson_info}
          </p>
          <p>
            <span className={css.teachersAccentText}>Conditions:</span>
            {joinArrayWithSpace(conditions)}
          </p>
        </div>
        {!showReadMore && (
          <button
            className={css.teachersReadMoreBtn}
            type="button"
            onClick={() => setShowReadMore(true)}>
            Read more
          </button>
        )}
        {showReadMore && (
          <div>
            <p className={css.teachersExperience}>{experience}</p>
            <ul className={css.teachersReview}>
              {reviews.map(({ comment, reviewer_name, reviewer_rating }) => (
                <li key={nanoid()}>
                  <div className={css.flexContainer}>
                    <img
                      className={css.teachersReviewImg}
                      src={faker.image.avatar()}
                      alt={reviewer_name}
                      width={44}
                      height={44}
                    />
                    <div className={css.flexReviewContainer}>
                      <h3 className={css.teachersReviewTitle}>
                        {reviewer_name}
                      </h3>
                      <p className={css.teachersReviewRating}>
                        <img
                          className={css.teachersReviewStar}
                          src={IconStar}
                          alt="IconStar"
                        />{' '}
                        {reviewer_rating}.0
                      </p>
                    </div>
                  </div>
                  <p>{comment}</p>
                </li>
              ))}
            </ul>
            <ul className={css.teachersLevelsList}>
              {levels.map(level => (
                <li
                  key={nanoid()}
                  className={`${css.teachersLevelsItem} ${
                    level === selectedLevel
                      ? css.activeLevel
                      : selectedLevel
                        ? css.inactiveLevel
                        : ''
                  }`}>
                  #{level}
                </li>
              ))}
            </ul>
            <button
              className={css.teachersTrialBtn}
              type="button"
              onClick={() => setShowBookTrialForm(true)}>
              Book trial lesson
            </button>
          </div>
        )}
        {!showReadMore && (
          <ul className={css.teachersLevelsList}>
            {levels.map(level => (
              <li
                key={nanoid()}
                className={`${css.teachersLevelsItem} ${
                  level === selectedLevel
                    ? css.activeLevel
                    : selectedLevel
                      ? css.inactiveLevel
                      : ''
                }`}>
                #{level}
              </li>
            ))}
          </ul>
        )}
      </div>
      {showBookTrialForm && (
        <PopUp setIsShowModal={setShowBookTrialForm}>
          <BookTrialForm
            avatar_url={avatar_url}
            name={name}
            surname={surname}
            setShowBookTrialForm={setShowBookTrialForm}
          />
        </PopUp>
      )}
    </>
  );
};

export default TeacherCard;
