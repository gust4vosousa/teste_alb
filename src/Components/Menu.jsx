import react from "react" //importa a biblioteca React
import homeIcon from "../Images/home.png" //importa o ícone de início
import profileIcon from "../Images/profile.png" //importa o ícone de perfil
import settingsIcon from "../Images/settings.png" //importa o ícone de configurações

export default () => //exporta a função descrita abaixo
        <div className="menu">
            <a href="#"><img src={homeIcon} alt="ícone de início" className="icons"/>Início</a>
            <a href="#"><img src={profileIcon} alt="ícone de perfil" className="icons"/>Meu Perfil</a>
            <a href="#"><img src={settingsIcon} alt="ícone de configurações" className="icons"/>Configurações</a>
            <div className="busca">
                <input type="text" placeholder="Pesquisar..."></input>
                <button>Pesquisar</button>
            </div>
        </div>