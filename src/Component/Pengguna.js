import React from 'react'

function Pengguna(props){
    return(
        <React.Fragment>
            <h3>Hitung Pengguna</h3>
            <p>Count : {props.countPengguna} </p>
            <button onClick={props.countTambah}>Pengguna</button>
        </React.Fragment>
    )
}
export default Pengguna