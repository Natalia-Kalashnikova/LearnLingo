import { ReactComponent as IconClose } from '../../images/icon/close-btn.svg';
import css from './CloseButton.module.css';

const CloseButton = ({ closeModal }) => {    
        return (
        <button className={css.btnCross} type="button" onClick={closeModal}>
            <IconClose />
        </button>
    );
}

export default CloseButton;