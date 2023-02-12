import { useState, useEffect } from 'react';
import axios from 'axios';

const useUpdateData = (url) => {
    const updateData = async (data) => {
        try {
            await axios.put(url, data);
        } catch (err) {
            console.log(err);
        }
    };

    return [updateData];
};

export default useUpdateData;
