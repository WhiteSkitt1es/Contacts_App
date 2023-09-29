import axios from 'axios';
import './App.css';
import TableView from './layouts/tableView/TableView';
import FormNewItems from './layouts/formNewItems/FormNewItems';
import React, {useState, useEffect} from 'react';

const App = () => {
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/contacts')
    .then(res => {
      const data = [];
      res.data._embedded.contacts.forEach(item => {
        data.push(
          {
            id: item.id,
            fullName: item.fullName,
            telephone: item.telephone,
            notes: item.notes
          }
        )
      })
      setItems(data);
    })
  }, []); 

  const appendContact = (fullName, telephone, notes) => {
    
    const temp = {
      //id: currentId,
      fullName: fullName,
      telephone: telephone,
      notes: notes}
    
    const url = 'http://localhost:8080/api/contacts';
    axios.post(url, temp)
      .then(e => {
        temp.id = e.data.id
        setItems([...items, temp]);
      });

  }

  const removeContact = (id) => {
    const url = `http://localhost:8080/api/contacts/${id}`;
    axios.delete(url);
    setItems(items.filter(item => item.id != id));
  }

  return (
    <div className = 'container mt-5'>
      <div className = 'card'>
        <div className = 'card-header'>
          <h1>Список контактов</h1>
        </div>
        <div className = 'card-body'>
          <TableView data = {items} removeContact = {removeContact}/>
          <FormNewItems appendContact = {appendContact}/>
        </div>
      </div>
    </div>
  );
}

export default App;
