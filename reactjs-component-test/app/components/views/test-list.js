import React from 'react';
import TestItem from './test-item';

export default function(props) {
  return (
    <ul className="widget-list">
      {props.items.map(item => {
        return (
            <TestItem key={item.id} name={item.name} experience={item.experience}/>
        );
      })}
    </ul>
  );
}
