import '../../index.css'
import './Menu.css'
import React from 'react' //importa a biblioteca React
import friendsIcon from "../../Images/friends.png" //importa o ícone de amigos
import groupsIcon from "../../Images/group.png" //importa o ícone de grupos
import pagesIcon from "../../Images/pages.png" //importa o ícone de páginas
import settingsIcon from "../../Images/settings.png" //importa o ícone de configurações
import homeIcon from "../../Images/home.png" //importa o ícone de início
import profileIcon from "../../Images/profile.png" //importa o ícone de perfil

export default () => //exporta a função descrita abaixo
  <div className="menu">
        <a href="#"><img src={homeIcon} alt="ícone de início" className="icons"/>Início</a>
        <a href="#"><img src={profileIcon} alt="ícone de perfil" className="icons"/>Meu Perfil</a>
        <a href="#"><img src={friendsIcon} alt="ícone de amigos" className="icons"/>Amigos</a>
        <a href="#"><img src={groupsIcon} alt="ícone de grupos" className="icons"/>Grupos</a>
        <a href="#"><img src={pagesIcon} alt="ícone de páginas" className="icons"/>Páginas</a>
        <a href="#"><img src={settingsIcon} alt="ícone de configurações" className="icons"/>Configurações</a>
  </div>