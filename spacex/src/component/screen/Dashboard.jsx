import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

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
        {launches.map(launche => {
            return(
                <p>{launche.flight_number}</p>
            )
        }
        )}
    </div>
)
}
export default withRouter(Dashboard);
