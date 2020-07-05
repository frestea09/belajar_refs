import React from 'react'

class Header extends React.PureComponent{
    render(){
        return(
            <div className='Header'>
                <h2>Web Latihan React</h2>
                <h3>Selamat Datang {this.props.namaPengguna}</h3>
                <p>Status : {this.props.statusPengguna}</p>
            </div>
        )
    }
}

export default Header