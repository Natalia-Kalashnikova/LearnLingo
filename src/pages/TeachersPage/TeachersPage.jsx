import { useAuth } from '../../hooks/auth.js';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import css from './TeachersPage.module.css';

const TeachersPage = () => {
  useAuth();

  return (
    <main className={css.main}>
      <TeachersList />
    </main>
  );
};

export default TeachersPage;
