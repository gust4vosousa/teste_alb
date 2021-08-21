import './index.css' //importa o arquivo css com os estilos da página
import React from 'react' //importa a biblioteca React
import ReactDOM from 'react-dom' //importa o pacote ReactDOM
import App from './App.js'

ReactDOM.render(
    <App/>,

    document.getElementById('root') //atribui os componentes acima à div 'root' no index.html
)