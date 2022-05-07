import axios from 'axios';
import React, { useEffect } from 'react';

const MyItem = () => {
    // useEffect(() => {
    //     const getItems = async () => {
    //         const email = user?.email;
    //         const url = `http://localhost:500/addedItem?email=${email}`
    //         try {
    //             const { data } = await axios.get(url);
    //             setItem(data)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getItems()
    // }, [])
    return (
        <div>
            <h2>those are my items</h2>
        </div>
    );
};

export default MyItem;