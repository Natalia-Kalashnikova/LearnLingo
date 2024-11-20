import SelectLanguage from './SelectLanguage/SelectLanguage.jsx';
import SelectLevel from './SelectLevel/SelectLevel.jsx';
import SelectPrice from './SelectPrice/SelectPrice.jsx';
import css from './SearchBar.module.css';

const SearchBar = ({ setLanguage, setLvl, setPrice }) => {
    return (
        <div className={css.searchbar}>
            <SelectLanguage setLanguage={setLanguage} />
            <SelectLevel setLvl={setLvl} />
            <SelectPrice setPrice={setPrice} />
        </div>
    );
}

export default SearchBar;