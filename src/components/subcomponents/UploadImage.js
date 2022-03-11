import React, { useContext } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import { FirebaseContext } from '../firebase';

//Circular Progress
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const CircularProgressWithLabel = (props) => {
    return(
        <Box sx={{ position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant='determinate' {...props} />

            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant='caption' component="div" color='purple'>
                    {props.value}%
                </Typography>
            </Box>
        </Box>
    )
}

const ImageUpload = (props) => {

    const { firebase } = useContext(FirebaseContext);
    const { upload, progress, url, error } = props;
    return(
        <div>
            <label
                htmlFor='image'
                className='block text-black text-md font-bold mb-3'
            >Image</label>

            <div className='grid grid-cols-2 gap-3 items-center'>
                <FileUploader 
                    className="shadow appearance-none border-2 border-gray-700 text-center font-bold rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    accept="image/*"
                    name="image"
                    randomizefilename="true"
                    storageRef={firebase.storage.ref('images')}
                    onUploadStart={props.onUploadStart}
                    onUploadError={props.onUploadError}
                    onUploadSuccess={props.onUploadSuccess}
                    onProgress={props.onProgress}
                    hidden={true}
                />

                <CustomUploadButton
                    accept="image/*"
                    name="image"
                    randomizefilename="true"
                    storageRef={firebase.storage.ref('images')}
                    onUploadStart={props.onUploadStart}
                    onUploadError={props.onUploadError}
                    onUploadSuccess={props.onUploadSuccess}
                    onProgress={props.onProgress}
                    className='uppercase text-white font-semibold bg-purple-700 text-center py-2 rounded-md hover hover:cursor-pointer h-12 hover:scale-105 delay-75 transition duration-100 ease-in-out'
                >
                    { !url ? 'Choose an Image' : 'Change Image'}
                </CustomUploadButton>

                <div className='justify-center flex'>

                    { error && (
                        <div>
                            <p className='text-red-600 uppercase font-bold '>Try again!!</p>
                        </div>
                    )}
                    { upload ? (
                        <CircularProgressWithLabel 
                            value={progress}
                        />
                    ) : !url ? null : (
                        <img 
                            src={url}
                            className="bg-contain h-24"
                        />
                    )  }
                </div>
            </div>
        </div>
    )
}

export default ImageUpload;