import './Header.css'
import atomLogo from '../../Images/atom.png'
import searchIcon from '../../Images/search.png'

export default () => //exporta a função descrita abaixo
        <div className="header">
            <img src={atomLogo} className='logo'/>
            <div className='title'>
                <h1>Atom</h1>
            </div>
            <form className="busca">
                <input type="text" placeholder="Pesquisar..."></input>
                <button type='submit'><img src={searchIcon}/></button>
            </form>
        </div>