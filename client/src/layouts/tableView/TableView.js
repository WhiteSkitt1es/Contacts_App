import React from 'react'
import TableRowItem from './components/TableRowItem';

const TableView = (props) => {
  return (
        <table className = 'table table-hover'>
            <thead>
              <tr>
                <th scope = 'col'>№</th>
                <th scope = 'col'>ФИО</th>
                <th scope = 'col'>Телефон</th>
                <th scope = 'col'>Заметки</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(item => (
                  <TableRowItem key = {item.id} removeContact = {props.removeContact} contact = {item}/>
                ))}
            </tbody>
        </table>
    );
}

export default TableView;