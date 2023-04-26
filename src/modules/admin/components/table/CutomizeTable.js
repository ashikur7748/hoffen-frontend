import React, { useRef } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { SiMicrosoftexcel } from 'react-icons/si';
import './CustomizeTable.css';


export const CutomizeTable = ({ rows, columns, isLoading }) => {
  const tableRef = useRef(null);

  return (
    <div class="table-responsive">
      <table className="table-bordered table-hover" style={{ width: '100%' }} ref={tableRef}>
        <TableHeader columns={columns} />
        <TableBody rows={rows} columns={columns} isLoading={isLoading} />
      </table>

      <div className='mt-3 float-right'>
        <DownloadTableExcel
          filename="Data"
          sheet="Data"
          currentTableRef={tableRef.current}
        >
          <button className='btn btn-success'><SiMicrosoftexcel style={{ fontSize: '18px', marginRight: '6px' }} /> Export</button>
        </DownloadTableExcel>
      </div>
    </div>
  )
}
