import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddData = (url) => {
    const addData = async (data) => {
        try {
            await axios.post(url, data);
        } catch (err) {
            console.log(err);
        }
    };

    return [addData];
};

export default useAddData;
