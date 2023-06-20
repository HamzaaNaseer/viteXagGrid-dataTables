import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react'
import React from 'react'


const Table = () => {
    const data = [{
        name: "sadia", age: 23
    },
    {
        name: "umar", age: 13
    }, {
        name: "kashif", age: 29
    },
    ]
    const columns = [
        {
            headerName: "Name", field: "name", flex: 1
        },
        {
            headerName: "Age", field: "age", flex: 1
        }
    ]
    const defaultColDefs = {
        editable: true, sortable: true, filter: true, floatingFilter: true
    }
    let gridApi
    const onGridReady = (params) => {
        gridApi = params.api
    }

    const exportData = () => {
        gridApi.exportDataAsCsv()
    }
    return (
        <div className="ag-theme-alpine" style={{
            height: "250px", width: "100%"
        }}>
            <button onClick={() => exportData()}>Export</button>
            <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDefs} onGridReady={onGridReady} />
        </div>
    )
}

export default Table