import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";


const Loading = () => {
    return (
        <div className='container mx-auto py-20 justify-center flex items-center'>
           <PuffLoader />
        </div>
    );
};

export default Loading;