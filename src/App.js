import React from 'react'
import Header from './Component/Header'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : 'ilman teguh prasetya',
      status : 'login',
      countPengguna : 0,
      inputName : ''
    }
    this.countTambah = this.countTambah.bind(this)
    this.setInputName = this.inputName.bind(this)
  }
  setInputName(inputName){
    this.setState(
      {
        inputName : inputName.target.value
      }
    )
  }
  countTambah(){
    this.setState(
      {
        countPengguna : this.state.countPengguna + 1
      }
    )
  }
  render(){
    return(
      <div className='App'>
        <Header namaPengguna={this.state.name} statusPengguna={this.state.status}/>
      </div>
    )
  }
}

export default App 