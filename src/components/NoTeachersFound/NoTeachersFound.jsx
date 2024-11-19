import css from "./NoTeachersFound.module.css"

const NoTeachersFound = () => {
    return (
        <div className={css.noFoundContainer}>
            <p>No teachers available at the moment. Please try again later!</p>
        </div>
    );
};

export default NoTeachersFound; 