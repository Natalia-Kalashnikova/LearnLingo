import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = { position: 'top-right', autoClose: 1500 };

export const showWarningToast = message => {
  toast.warning(message, toastOptions);
};

export const showSuccessToast = message => {
  toast.success(message, toastOptions);
};

export const showErrorToast = message => {
  toast.error(message, toastOptions);
};
