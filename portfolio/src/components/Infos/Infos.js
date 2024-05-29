import * as React from 'react'
import './Infos.css'

function Infos(){
    return(
        <div className="infos">
            <img className="logo" src="/images/logo-fundo-escuro.png" alt="Logo em fundo escuro"/>
            <div className="grade-horizontal">
                <h2>Julia Romani Barreta</h2>
                <h4>21 anos, solteira</h4>
            </div>
        </div>
    )
}

export default Infos