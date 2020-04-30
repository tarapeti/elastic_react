import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { JsonToTable } from "react-json-to-table";

function DataFetching() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/all")
            .then(res => {
                setArticles(res.data.all);
            })
            .catch(err =>  
                { console.log(err)})
        }, [])

    return (
        <div className="Datafetching">
            <JsonToTable json={articles} />
        </div>
    )
}

export default DataFetching;
