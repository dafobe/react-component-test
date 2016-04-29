import React from 'react';

export default function(props) {
  return (
    <ul className="widget-list">
      {props.items.map(item => {
        return (
            <li>Item</li>
        );
      })}
    </ul>
  );
}