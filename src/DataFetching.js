import React, {useState, useEffect} from 'react'
import axios from 'axios'
 
const Edit = () => {
  const [id, setId] = useState([])
 
  useEffect(() => {
    var params = new URLSearchParams();
    params.append('articleId', '6r217XAB5iOodh1RcFWh');
    axios
        .post("http://localhost:8080/getById", params )
        .then(res => {
          setId(res.data.all);
        })
        .catch(err =>  
            { console.log(err)})
    }, [])
 
  return (
    <form >
      <button type="submit">Submit</button>
    </form>
  );
};
export default Edit;