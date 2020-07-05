import React from 'react'

function Form(props){
    return(
        <div>
            <h3>Form Mahasiswa</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Name : </td>
                        <td>
                            <input id='inputName' name='inputName' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input id='btnSubmit' name='btnSubmit' type='submit' value='Save'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Form