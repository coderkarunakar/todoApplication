import React, { useEffect, useState} from  'react';
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/data')
        .then((response)=> {
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },[]);

    return (
        <div>
            <h2>Fetched Data</h2>
            <ul>
                {data.map((item, index) =>(
                    <li key = {index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
                };


export default DataFetcher;