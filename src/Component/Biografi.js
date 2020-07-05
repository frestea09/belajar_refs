import React from 'react'

function Biografi(){
    return(
        <React.Fragment>
            <h3>Profile Ilman</h3>
            <p>Selamat Datang diWebsite ilman, website ini dibuat menggunakan react js. React JS adalah salah satu libary javascript yang di buat oleh facebook</p>
        </React.Fragment>
    )
}
export default React.memo(Biografi)