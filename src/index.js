

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css"

ReactDOM.render(
<App/>,
document.querySelector('#root')
)

//o arquivo principal, tem que ter os dois imports de reacts acima

//Export default, sem chaves
//Export sem default, colocar chaves
//lembrando que todos arquivos que são componentes devem ter  import React, {Component} from 'react';

//sempre dividir os componentes e os containers pra melhor organização