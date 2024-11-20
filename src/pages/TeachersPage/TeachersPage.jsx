import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth.js";
import TeachersList from "../../components/TeachersList/TeachersList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { getAllFiltered } from '../../services/api.js';
import css from './TeachersPage.module.css';


const TeachersPage = () => {
    useAuth();

  const [language, setLanguage] = useState(null);
  const [lvl, setLvl] = useState(null);
  const [price, setPrice] = useState(null);

  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
      const getFilteredTeachers = async () => {
          try {
              const filteredTeachers = await getAllFiltered(language, lvl, price);
              setFiltered(filteredTeachers);
          } catch (error) {
              console.error('Error fetching filtered teachers:', error);
          }
      };

    getFilteredTeachers();
  }, [language, lvl, price]);

    return (
        <main className={css.main}>
            <SearchBar
                setLanguage={setLanguage}
                setLvl={setLvl}
                setPrice={setPrice}
            />
            <TeachersList filtered={filtered} lvl={lvl} />
        </main>
    );
}

export default TeachersPage;


