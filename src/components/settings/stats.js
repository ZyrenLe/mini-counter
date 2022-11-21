import { useEffect, useState } from "react";
import '../../css/stats.css';

export default function Stats() {
    // const [statistic, setStatistic] = useState();
    const [statistic, setStatistic] = useState();
    const today = new Date().toISOString().substring(0, 10) 
    useEffect(()=>{ getStats()},[])

    async function getStats(){
        // Post products to python backend       
            const date = document.getElementById('date').value;  
            const req_options = {
                method : 'GET',
                crossDomain : true,
                headers : { 'Content-Type':'application/json' }
            };
            await fetch('http://localhost:8080/orders?date='+date, req_options)
                .then(response => response.json())
                .then(data => setStatistic(data))
                .catch(error => console.log(error))
            console.log(statistic);
        }

    
    function Eintrag(){
        const row = statistic.map((entry)=>{
            return (
                <div className="stats row">
                    <div className="stats entry name">{entry.name}</div>
                    <div className="stats entry sold">{entry.sold}x</div>
                    <div className="stats entry date">{entry.date}</div>
                </div>
            ) 
        })
        return row
    }

    

    return (
        <section className="stats view">
            
            <div className="stats list">
                {statistic && <Eintrag />}
                <input type="date" id="date" defaultValue={today}/>
                <button onClick={getStats}>Daten</button>
            </div>
        </section>
    )
    
}