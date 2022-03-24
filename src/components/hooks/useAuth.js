import { verifyUserInfoAction } from '../../services/userServices';
import { useDispatch } from 'react-redux';

export const useAuthvalidation = () => {
    const dispatch = useDispatch()
    const tokenStorage = JSON.parse(localStorage.getItem('$token'));

    const getUsersInfo = () => {
        dispatch(verifyUserInfoAction(tokenStorage))
    }

    const removeToken = () => {
        localStorage.removeItem('$token')
    }

    return {
        tokenStorage,
        getUsersInfo,
        removeToken
    }
}