import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import LaunchList from './LaunchList';
import { generateSearchTerm, paramsFromUrl } from '../../utlis/index'

function Dashboard(){
    const [launches, setLaunches] = useState([]);
    
    const launche = async () => {
        try{
        const resp = await axios.get(
            'https://api.spacexdata.com/v3/launches'
        );
        setLaunches(resp.data)
        // console.log(resp.data)
    } catch (error) {
        console.log(error)
        }
    }
    useEffect(()=>{
        launche()
    },[])

return (
    <div>
        <LaunchList
        launches={launches}/>
    </div>
)
}
export default withRouter(Dashboard);
