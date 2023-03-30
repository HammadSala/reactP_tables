// Name, Language, Genres(sub items, join them with ,), Info->  Preiemierd, Runtime (ms), Rating Status

const columns = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Language',
        accessor: 'language'
    },
    {
        Header: 'Genres',
        accessor: 'genres',
        Cell: (props : any) => props.value.join(',')
    },
    {
        Header: 'Info',
        columns: [
           { 
                Header: 'Preimeird',
                accessor: 'preimeird'
            },
            {
                Header: 'Runtime (ms)',
                accessor: 'runtime'
            },
            {
                Header: 'Rating Status',
                accessor: 'rating'
            }
        ]
    }
]


export default columns;