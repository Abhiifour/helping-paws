import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss'

export const showToastMessage = () => {
    toast.success('Feature Coming Shortly.', {
        position: toast.POSITION.TOP_CENTER,
        className:'toastMessage'
    });
};
