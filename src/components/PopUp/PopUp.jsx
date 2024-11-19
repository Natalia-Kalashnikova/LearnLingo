import Modal from "../Modal/Modal.jsx";
import CloseButton from "../CloseButton/CloseButton.jsx";
import css from "./PopUp.module.css";
import { useCallback, useEffect } from "react";

const PopUp = ({ children, setIsShowModal }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleKeyDown = useCallback((evt) => {
        if (evt.code === 'Escape') {
            setIsShowModal(false);
        }
    }, [setIsShowModal]
    );

    const handleOverlayClick = useCallback((evt) => {
        if (evt.target === evt.currentTarget) {
            setIsShowModal(false);
        }
    }, [setIsShowModal]
    );

    return (
        <Modal>
            <div className={css.backdrop} onClick={handleOverlayClick}>
                <div className={css.popup}>
                    <CloseButton closeModal={() => setIsShowModal(false)} />
                    {children}
                </div>
            </div>
        </Modal>
    )
}

export default PopUp;