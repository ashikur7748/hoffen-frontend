import React from 'react';

export const TableHeader = (columns) => {
   const columnItems = columns.columns.columns;
  return (
    <thead>
        <tr>
            {columnItems && columnItems.map((column,key)=>(
                <th key={key}>{column}</th>
            ))}
        </tr>
  </thead>
  )
}
