import React from 'react';
import { Loader } from '../loader/Loader';

export const TableBody = ({ rows, columns, isLoading }) => {

  return (
    <tbody>
      {
        isLoading ? <td colSpan={7}><Loader /></td> :
          rows.length !== 0 ?
            rows.map(row => (
              <tr key={row.path}>
                {
                  columns.map(column => (
                    <td>{column.content(row, column.path)}</td>
                  ))
                }
              </tr>
            )) :
            <td colSpan={7} className='text-danger text-center'>No Record Found</td>
      }
    </tbody>
  )
}
