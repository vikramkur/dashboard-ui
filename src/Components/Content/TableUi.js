import React from "react";
import TableData from "./TableData";
import DataTable from "react-data-table-component"; 

const columns = [
    {
      id: 1,
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      reorder: true
    },
    {
      id: 2,
      name: "Director",
      selector: (row) => row.director,
      sortable: true,
      reorder: true
    },
    {
      id: 3,
      name: "Runtime (m)",
      selector: (row) => row.runtime,
      sortable: true,
      right: true,
      reorder: true
    }
  ];
  
  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: "ALL"
  };

const TableUI = () => {
    return(
        <>
        <DataTable
            title="Applications"
            columns={columns}
            data={TableData}
            defaultSortFieldId={1}
            pagination
            count={10}
            paginationComponentOptions={paginationComponentOptions}
        />
        
        </>
    )
}

export default TableUI