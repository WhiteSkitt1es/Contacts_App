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
              {props.data.map((item, index) => (
                  <TableRowItem
                    key = {item.id}
                    removeContact = {props.removeContact}
                    contact = {item}
                    index = {index + 1}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default TableView;