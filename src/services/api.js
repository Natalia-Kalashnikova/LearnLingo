import { getDatabase, ref, child, get } from 'firebase/database';

export async function getAllTeachers(teachersPerPage) {
  try {
    const db = getDatabase();
    const dbRef = ref(db);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const teachersData = Object.values(snapshot.val());
      return teachersData.slice(0, teachersPerPage);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching teachers data:', error);
    return [];
  }
}

export async function getTeachersByLanguage(language) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    const teachers = snapshot.val();
    const filteredTeachers = Object.values(teachers).filter(teacher =>
      teacher.languages.includes(language)
    );
    return filteredTeachers;
  } catch (error) {
    console.error(error);
  }
}

export async function getTeachersByLvl(lvl) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    const teachers = snapshot.val();
    const filteredTeachersByLvl = Object.values(teachers).filter(teacher =>
      teacher?.levels.includes(lvl)
    );
    return filteredTeachersByLvl;
  } catch (error) {
    console.error(error);
  }
}

export async function getTeachersByPrice(price) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    const teachers = snapshot.val();
    const filteredTeachersByPrice = Object.values(teachers).filter(
      teacher => teacher.price_per_hour === +price
    );
    return filteredTeachersByPrice;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllFiltered(language, lvl, price) {
  try {
    const db = getDatabase();
    const dbRef = ref(db);
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      console.log('No data available');
      return [];
    }

    let teachers = Object.values(snapshot.val());

    if (language) {
      teachers = teachers.filter(teacher =>
        teacher.languages.includes(language)
      );
    }

    if (lvl) {
      teachers = teachers.filter(teacher => teacher.levels.includes(lvl));
    }

    if (price) {
      teachers = teachers.filter(teacher => teacher.price_per_hour === +price);
    }

    return teachers;
  } catch (error) {
    console.error('Error fetching filtered teachers:', error);
    return [];
  }
}
