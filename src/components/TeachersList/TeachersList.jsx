import { useEffect, useState } from 'react';
import { getAllTeachers } from '../../services/api.js';
import TeacherCard from '../../components/TeacherCard/TeacherCard.jsx';
import NoTeachersFound from '../../components/NoTeachersFound/NoTeachersFound.jsx';
import css from './TeachersList.module.css';

const TeachersList = ({ filtered, lvl }) => {
    const [teachersPerPage, setTeachersPerPage] = useState(4);
    const [favoritesPerPage, setFavoritesPerPage] = useState(4);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const getTeachersData = async () => {
            const teachersData = await getAllTeachers(teachersPerPage);
            setTeachers(teachersData);
        };
        getTeachersData();
    }, [teachersPerPage]);

    const handleShowMore = () => {
        setTeachersPerPage((prev) => prev + 4);
    };

    const favoritesShowMore = () => {
        setFavoritesPerPage((prev) => prev + 4);
    };

    return (
        <>
            {filtered && filtered.length === 0 ? (
                <NoTeachersFound />
            ) : (
                <ul className={css.cardsList}>
                    {filtered && filtered.length > 0
                        ? filtered.slice(0, favoritesPerPage).map((teach, index) => (
                            <li className={css.cardsItem} key={index}>
                                <TeacherCard card={teach} lvl={lvl} selectedLevel={lvl} />{' '}
                            </li>
                        ))
                        : teachers.length > 0 && teachers.map((teach, index) => (
                            <li className={css.cardsItem} key={index}>
                                <TeacherCard card={teach} lvl={lvl} selectedLevel={lvl} />{' '}
                            </li>
                        ))}
                </ul>
            )}
            {teachers.length < 30 && !filtered && (
                <button
                    className={css.cardsLoadMoreBtn}
                    type="button"
                    onClick={handleShowMore}
                >
                    Show more
                </button>
            )}
            {filtered && filtered.length > favoritesPerPage && (
                <button
                    className={css.cardsLoadMoreBtn}
                    type="button"
                    onClick={favoritesShowMore}
                >
                    Show more
                </button>
            )}
        </>
    );
};

export default TeachersList;

