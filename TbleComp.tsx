import React from 'react'
import { useTable } from 'react-table'

interface Person {
  name: string
  age: number
  email: string
}

interface TableProps {
  columns: any
  data: Person[]
}

function Table({ columns, data }: TableProps) {
  const tableInstance = useTable({ columns, data })

  return (
    <table>
      <thead>
        <tr>
          {tableInstance.headerGroups.map(headerGroup => (
            <th key={headerGroup.id}>{headerGroup.render('Header')}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableInstance.rows.map(row => {
          tableInstance.prepareRow(row)
          return (
            <tr key={row.id}>
              {row.cells.map(cell => (
                <td key={cell.id}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Email', accessor: 'email' },
    ],
    []
  )

  const data = React.useMemo(
    () => [
      { name: 'Alice', age: 28, email: 'alice@example.com' },
      { name: 'Bob', age: 35, email: 'bob@example.com' },
      { name: 'Charlie', age: 42, email: 'charlie@example.com' },
    ],
    []
  )

  return (
    <div>
      <h1>Basic Table</h1>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default App
