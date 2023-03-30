import React, { ReactElement } from "react";
import { Column, useTable , useGlobalFilter} from "react-table"
import '../css/Table.css';

type Props = {
    columns : Column<object>[],
    data: any
}

const ReactTable1 = ( { columns, data } : Props) =>
{
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state /*, setGlobalFilter*/} =useTable( 
        {
            data,
            columns
        }, useGlobalFilter
    )
    return (
        <>
        Search :
        {/* <input type="search" 
                value={state.globalFilter}
                onChange={(event : React.ChangeEvent<HTMLInputElement>)=> setGlobalFilter(event.target.value)}
                /> */}
        <hr></hr>
        ReactTable1
        <table {...getTableProps()}>
            <thead>
                {
                   headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                      { headerGroup.headers.map(column =>
                        (
                            <th  {...column.getHeaderProps()}>
                                    {column.render('Header')}
                            </th>
                        )

                      )}
                    </tr>
                   ))
                    
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map( row => {
                            prepareRow( row );
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map( cell =>(
                                        <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                                    ))}
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
        
        </>
    );
}

export default ReactTable1;