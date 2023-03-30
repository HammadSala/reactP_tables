
import './App.css';
// import ReactTable1 from './components/ReactTable1';
import shows from './shows';
// import { Column } from 'react-table';
// import columnsConfig from './components/Columns';
import ReactTableUI from 'react-table-ui';
import { useMemo, useRef } from 'react'
import type { TableInstance, DataType } from 'react-table-ui'



function App() {

  const data = useMemo( ()=> shows,[]);
  // const columns = useMemo( ()=> columnsConfig, []);


  // interface User extends DataType {
  //   name: string
  //   age: number
  // }


  interface User extends DataType {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;

  }
  // const data: User[] = useMemo(
  //   () => [
  //     { name: 'Abc Xyx', age: 20 },
  //     { name: 'Def Uvw', age: 25 },
  //     { name: 'Ghi Rst', age: 23 },
  //     { name: 'Jklm Nopq', age: 30 }
  //   ],
  //   []
  // )

  // Create an instance ref that will hold the reference to React Table instance.
  const tableInstanceRef = useRef<TableInstance<User>>(null)
  

  return (
    <div className="App">
        React Table
        <ReactTableUI
      title='My Table'
      data={data}
      tableInstanceRef={tableInstanceRef}
    />
    </div>
  );
}

export default App;
