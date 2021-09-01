import './NotFound.css';
import errorIcon from '../../Images/error.png';

export default () => 
    <div className='error'>
        <img src={errorIcon}/>
        <h1>ERROR 404</h1>
        <h2>Page not found</h2>
    </div>