import React from 'react';
import TickIcon from './TickIcon';
import Progress from './Progress';


export interface Task {
  date: string;
  id?: string;
  progress?: number;
  title?: string;
  user_email?: string;
}

export const ListItem = ( task: Task ) => {
  return (
    <li className="list-item">
      <div className='info-container'>
        <TickIcon/>
        <p className='task-title'>{task.title}</p>
        <Progress/>
      </div>
      <div className='button-container'>
        <button className='edit'>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>
    </li>
  );
}

export default ListItem;