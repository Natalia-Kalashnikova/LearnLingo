import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth.js';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import heroPng from '../../images/img/hero.png';
import heroWebp from '../../images/img/hero.webp';
import heroPng2x from '../../images/img/hero@2x.png';
import heroWebp2x from '../../images/img/hero@2x.webp';
import css from './HomePage.module.css';


const HomePage = () => {
    useAuth();

    const teacherInfo = [
        { value: '32,000 +', details: 'Experienced tutors' },
        { value: '300,000 +', details: '5-star tutor reviews' },
        { value: '120 +', details: 'Subjects taught' },
        { value: '200 +', details: 'Tutor nationalities' },
    ];

    useEffect(() => {
        document.body.classList.add('home-page');

        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    return (
        <main>
            <div className={css.heroContainer}>
                <div className={css.heroDescription}>
                    <h1 className={css.heroTitle}>
                        Unlock your potential with the best{' '}
                        <span className={css.heroAccent}>language</span> tutors
                    </h1>
                    <p className={css.heroText}>
                        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors
                    </p>
                    <Link className={css.heroLink} to="/teachers">Get started</Link>
                </div>
                <div>
                    <picture>
                        <source type="image/webp" srcSet={`${heroWebp} 1x, ${heroWebp2x} 2x`} />
                        <source type="image/png" srcSet={`${heroPng} 1x, ${heroPng2x} 2x`} />
                        <img className={css.heroImg} srcSet={heroPng} alt="Redhead girl with laptop" />
                    </picture>
                </div>
            </div>
            <ul className={css.heroList}>
                {teacherInfo.map(({ value, details }) => (
                    <li className={css.heroItem} key={nanoid()}>
                        <p className={css.heroTotal}>{value}</p>
                        <p className={css.heroBenefits}>{details}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default HomePage;


