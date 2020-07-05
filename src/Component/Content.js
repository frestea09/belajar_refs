import React from 'react'
import Biografi from './Biografi'
import Pengguna from './Pengguna'
function Content(props){
    return(
        <div className ='Content'>
            <Biografi/>
            <Pengguna countPengguna={props.countPengguna} countTambah={props.countTambah}/>
        </div>
    )
}
export default Content