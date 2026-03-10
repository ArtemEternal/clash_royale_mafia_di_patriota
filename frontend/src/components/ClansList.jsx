import { useEffect, useState } from "react";
import styles from "../styles/ClansList.module.css";

export default function ClansList(){

    const [dataClans, setDataClans] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/get_clans", {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
        .then((r) => r.json())
        .then((r) => {setDataClans(r)})
    },[]);

    return<>
        <div className={styles.contentContainer}>
            {dataClans.map(clan => (
                <div key={clan.tag} className={styles.clanSpan}>
                    <div className={styles.clanInfo}>
                        <h4 className={styles.clanName}>{clan.name}</h4>
                        <h4 className={styles.clanTag}>({clan.tag})</h4>
                    </div>
                    <div className={styles.linkToRoyaleApi}>
                        <a 
                            href={`https://royaleapi.com/clan/${clan.tag.slice(1)}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >RoyaleAPI</a>
                    </div>
                </div>
            ))}
        </div>
    </>
};