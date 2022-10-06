import React, { useState, useEffect } from 'react';
import { server_calls } from '../api'

export const useGetData = () => {
    const [vehicleData, setData] = useState<[]>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])
        return {vehicleData, getData:handleDataFetch}
}