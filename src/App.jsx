import React from "react";
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
        <div className="columns is-multiline">
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
            <div className="column is-4"><Button /></div>
        </div>
    );
}
/*tableをつくって、データがわたされたら動的に変えていきたい*/
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