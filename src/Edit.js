import React, {useState} from 'react'
import axios from 'axios'
 
const Edit = () => {
  const [id, setId] = useState([])
  const [header, setHeader] = useState([])
  const [content, setContent] = useState([])
  const [date, setDate] = useState([])
 
  const postData = () => {
    var params = new URLSearchParams();
    params.append('articleId', id);
    axios
        .post("http://localhost:8080/getById", params )
        .then(function (response) {
          setHeader(response.data.header)
          setContent(response.data.content)
          setDate(response.data.date)
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
 
    const updateArticle = () => {
      var params = new URLSearchParams();
 
      params.append('articleId', id);
      params.append('updatedHeader', header);
      params.append('updatedContent', content);
      params.append('updatedDate', date);
      axios
          .post("http://localhost:8080/updateArticle", params )
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
 
    const handleSubmit = (evt) => {
      evt.preventDefault();
      postData();
      alert(`Submitting Article Id ${id}`)
  }
 
  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateArticle();
    alert(`Submitting Article Id ${id}`)
}
 
    return (
      <div>
        <form onSubmit={handleSubmit}>
 
            <label>Article Id</label>
            <input type="text"
            value={id}
            onChange={id => setId(id.target.value)} />
   
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={handleUpdate}>
          <input type="text"
              value={header}
              onChange={header => setHeader(header.target.value)} />
 
          <input type="text"
              value={content}
              onChange={content => setContent(content.target.value)} />
 
          <input type="date"
              value={date}
              onChange={date => setDate(date.target.value)} />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
};
export default Edit;