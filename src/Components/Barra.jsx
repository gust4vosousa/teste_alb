import React from 'react' //importa a biblioteca React
import friendsIcon from "../Images/friends.png" //importa o ícone de amigos
import groupsIcon from "../Images/group.png" //importa o ícone de grupos
import pagesIcon from "../Images/pages.png" //importa o ícone de páginas

export default () => //exporta a função descrita abaixo
  <div className="barra">
    <div className="lista">
        <a href="#"><img src={friendsIcon} alt="ícone de amigos" className="icons"/>Amigos</a>
        <a href="#"><img src={groupsIcon} alt="ícone de grupos" className="icons"/>Grupos</a>
        <a href="#"><img src={pagesIcon} alt="ícone de páginas" className="icons"/>Páginas</a>
    </div>
  </div>