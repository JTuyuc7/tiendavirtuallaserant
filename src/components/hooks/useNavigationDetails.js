import { useState } from 'react';

export const useNavigationDetails = () => {

    const [ urlSave, setUrlSaved ] = useState('')

    const setNewUrl = (newUrl) => {
        const saved = localStorage.setItem('$URL', newUrl);
        setUrlSaved(saved);
    }

    return{
        urlSave,
        setNewUrl,
    }
}