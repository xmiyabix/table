function Header(){
    return(
        <header className="hero is-dark is bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">tarkov ammo chart</h1>
                </div>
            </div>
        </header>
    );
}

function Button(){
    return(
        <div>
            <button className="button is-info is light">9*39mm</button>
        </div>
    );
}

/*
function Table(){
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });
    return(
        <table{...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column)=>(
                            <th{...column.getHeaderProps()}>
                            {column.render("Header")}
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
                                return (
                                    <td {...cell,getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
*/
function Buttongallery(){
    return(
        <div className="columns is-mobile is-multiline">
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
        </div>
    );
}

function Table(){
    return(
        <table className="table">
            <thead>
                <th>Icon</th>
                <th>name</th>
                <th>damage</th>
                <th>penetration</th>
            </thead>
            <tr>
                <td>none</td>
                <tb>9*39 pst_gzh</tb>
                <th>54</th>
                <th>20</th>
            </tr>
        </table>
    );
}

function List(){
    return(
        <ul>
            {[1,2,3,4,5].map((value)=><li>{value}</li>)}
        </ul>
    );
}

function Main(){
    return(
        <div className="columns is-vcented is-multiline">
            <div className="column is-3">
                <Buttongallery />
                <Table />
                <List />
            </div>
        </div>
    );
}

function Footer(){
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <a href="https://twitter.com/xmiyabix_VRC">作った人 twitterに飛びます</a>
                </p>
            </div>
        </footer>
    );
}

function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default App;