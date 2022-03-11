import { useState, useContext } from 'react';
import FirebaseContext from '../firebase/context';
import { useSelector } from 'react-redux';

export const useUpload = () => {

    const { firebase } = useContext(FirebaseContext);
    const { imgEdited } = useSelector( (state) => state.dishes );

    const [ upload, setUpload ] = useState(false);
    const [ progress, setProgress ] = useState(0);
    const [ imgUrl, setImgUrl ] = useState(imgEdited);
    const [ imgError, setImgError ] = useState(null); 
    const [ progresImg, setProgressImg ] = useState(0);

    const handleUploadStart = () => {
        setUpload(true);
        setProgress(0);
    }

    const handleUploadError = (error) => {
        setUpload(false);
        setImgError(error);
    }

    const handleUploadSuccess = async (name) => {
        setUpload(false);
        setProgress(100);
        const url = await firebase.storage.ref('images').child(name).getDownloadURL();
        setImgUrl(url)
        //setImgUrl('https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg')
    }

    const handleProgress = (progress) => {
        setProgress(progress);
        //console.log('progreso', progress)
        setProgressImg(progress)
    }

    return {
        upload,
        progress,
        imgUrl,
        imgError,
        progresImg,
        handleUploadStart,
        handleProgress,
        handleUploadSuccess,
        handleUploadError,
    }
}