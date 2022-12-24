import React from "react";
import {useSortBy, useTable} from "react-table";
import {columns,data}from "./tabledata";
import "./styles.css";

export default function App(){
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    },
    useSortBy
    );

    return(
        <table {...getTableProps}>
            <thead>
                {headerGroups.map((headerGroups)=>(
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column)=>(
                            <th {...column.getHeaderProps((column.getSortByToggleProps))}>
                                {column.render("Header")}
                            <span>
                                {column.isSorted ?
                                    (column.isSortedDesc ? "1":"2"):""
                                    }
                            </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row,i)=>{
                    prepareRow(row);
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                                return(
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
