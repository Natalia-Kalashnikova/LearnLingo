import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('portal'));
};

export default Modal;
