import React, {useState} from 'react'
import axios from 'axios'
 
const Edit = () => {
  const [id, setId] = useState([])
 
  const postData = () => {
    var params = new URLSearchParams();
    params.append('articleId', id);
    axios
        .post("http://localhost:8080/getById", params )
        .then(res => {
          console.log(res)
        })
        .catch(err =>  
            { console.log(err)})
    }
 
    const handleSubmit = (evt) => {
      evt.preventDefault();
      postData();
      alert(`Submitting Article Id ${id}`)
  }
 
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Article Id</label>
          <input type="text"
          value={id}
          onChange={aId => setId(aId.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
};
export default Edit;