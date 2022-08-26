import React, { FC } from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa'

interface Props {
  items: {id:string, title:string}[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

export const List:FC<Props> = ({items, removeItem, editItem}) => {
  return (
    <div className='grocery-list'>
      {
        items.map( ({id, title}) => (
          <article key={id} className='grocery-item'>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className='edit-btn'  onClick={() => editItem(id)}> <FaEdit/> </button>
              <button className='delete-btn' onClick={() => removeItem(id)}> <FaTrash/> </button>
            </div>
          </article>
        ))
      }
    </div>
  )
}
