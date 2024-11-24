import { useEffect, useState } from 'react';
import { getAllTeachers } from '../../services/api.js';
import TeacherCard from '../../components/TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';

const TeachersList = () => {
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachersData = async () => {
      const teachersData = await getAllTeachers(teachersPerPage);
      setTeachers(teachersData);
    };
    getTeachersData();
  }, [teachersPerPage]);

  const handleShowMore = () => {
    setTeachersPerPage(prev => prev + 4);
  };

  return (
    <>
      <ul className={css.cardsList}>
        {teachers.map((teach, index) => (
          <li className={css.cardsItem} key={index}>
            <TeacherCard card={teach} />
          </li>
        ))}
      </ul>

      {teachers.length > 0 && teachers.length < 30 && (
        <button
          className={css.cardsLoadMoreBtn}
          type="button"
          onClick={handleShowMore}>
          Show more
        </button>
      )}
    </>
  );
};

export default TeachersList;
