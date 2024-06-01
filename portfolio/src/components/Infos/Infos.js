import * as React from 'react'
import './Infos.css'

function Infos(){
    return(
        <div className="infos">
            <img className="logo" src="/images/logo-fundo-escuro-att.png" alt="Logo em fundo escuro"/>
            <div className="grade-horizontal">
                <h2 className='tit-principal'>Julia Romani Barreta</h2>
                <h4 className='tit-secundario'>21 anos, brasileira, solteira.</h4>
            </div>
        </div>
    )
}

export default Infos