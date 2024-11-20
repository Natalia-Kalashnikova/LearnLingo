import { languages } from "../../../utils/options.js";
import css from "./SelectLanguage.module.css";
import Select from "react-select";

const SelectLanguage = ({ setLanguage }) => {
    const handleChange = (e) => {
        if (e === null) {
            setLanguage(null);
        } else {
            setLanguage(e.value);
        }
    };

    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused
                ? '1px solid var(--accent-color)'
                : '1px solid var(--accent-light)',
            '&:hover': {
                border: '1px solid var(--accent-color)',
            },
            boxShadow: state.isFocused ? null : baseStyles.boxShadow,
            outline: 'none',
            width: '221px',
            height: '48px',
            background: '#fff',
            borderRadius: '14px',
            fontSize: '18px',
            fontWeight: '500',
            color: '#121417',
            cursor: 'pointer',
            fontFamily: 'Roboto, sans-serif',
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: '#121417',
            fontSize: '18px',
            fontWeight: '500',
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            fontFamily: 'Roboto, sans-serif',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '1.11111',
            outline: 'none',
            background: state.isSelected
                ? 'transparent'
                : state.isFocused
                    ? 'transparent'
                    : 'white',
            color: state.isSelected
                ? 'var(--dark-color)'
                : state.isFocused
                    ? 'var(--dark-color)'
                    : 'rgba(18, 20, 23, 0.2)',
        }),
        valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '14px',
            boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
        }),
        clearIndicator: (baseStyles) => ({
            ...baseStyles,
            display: 'none',
        }),
        dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: '#121417',
            '&:hover': {
                color: '#121417',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
    };

    return (
        <div className={css.searchContainer}>
            <div className={css.selectContainer}>
                <label htmlFor="language" className={css.labelSelect}>
                    Languages
                </label>
                <Select
                    id="language"
                    options={languages}
                    placeholder={'Language'}
                    onChange={handleChange}
                    maxMenuHeight={272}
                    isClearable={true}
                    styles={customStyles}
                />
            </div>
        </div>
    );
}

export default SelectLanguage;
