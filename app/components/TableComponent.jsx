// components/DataTable.js
import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
  },
  {
    id: 3,
    name: 'Peter Parker',
    email: 'peterparker@example.com',
  },
  {
    id: 4,
    name: 'Peter Parker',
    email: 'peterparker@example.com',
  },
  {
    id: 5,
    name: 'Peter Parker',
    email: 'peterparker@example.com',
  },
  {
    id: 6,
    name: 'Peter Parker',
    email: 'peterparker@example.com',
  },
  {
    id: 7,
    name: 'Peter Parker',
    email: 'peterparker@example.com',
  },
  // Add more data as needed
];

const DataTableComponent = () => {
  const [filterText, setFilterText] = React.useState('');

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filterText.toLowerCase()),
    ),
  );

  return (
    <div className="full-table">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-bold text-lg">Table User</p>
        </div>

        <div>
          <input
            className="bg-slate-100 border border-gray-500 rounded p-2"
            type="text"
            placeholder="Search..."
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
      </div>
      <DataTable
        // title="User Data"
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 20, 50]}
        highlightOnHover
        striped
        responsive
        noDataComponent={<div>No data available</div>}
      />
    </div>
  );
};

export default DataTableComponent;
