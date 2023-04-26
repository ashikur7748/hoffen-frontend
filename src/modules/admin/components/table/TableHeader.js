import React from 'react';

export const TableHeader = ({ columns }) => {

    return (
        <thead>
            <tr>
                {
                    columns.map(column => (
                        <th key={column.label}>{column.label}</th>
                    ))
                }
            </tr>
        </thead>
    )
}
