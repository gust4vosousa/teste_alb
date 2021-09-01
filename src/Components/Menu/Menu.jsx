import '../../index.css';
import './Menu.css';
import React from 'react';
import friendsIcon from '../../Images/friends.png';
import groupsIcon from '../../Images/group.png';
import pagesIcon from '../../Images/pages.png';
import settingsIcon from '../../Images/settings.png';
import homeIcon from '../../Images/home.png';
import profileIcon from '../../Images/profile.png';

export default () =>
  <div className='menu'>
        <a href='#'><img src={homeIcon} alt='ícone de início' className='icons'/>Início</a>
        <a href='#'><img src={profileIcon} alt='ícone de perfil' className='icons'/>Meu Perfil</a>
        <a href='#'><img src={friendsIcon} alt='ícone de amigos' className='icons'/>Amigos</a>
        <a href='#'><img src={groupsIcon} alt='ícone de grupos' className='icons'/>Grupos</a>
        <a href='#'><img src={pagesIcon} alt='ícone de páginas' className='icons'/>Páginas</a>
        <a href='#'><img src={settingsIcon} alt='ícone de configurações' className='icons'/>Configurações</a>
  </div>