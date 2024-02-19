import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png'

const Navbar=()=>{
    return (
        <nav className={styles.nav}>
            <div>
            <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <div>
            <h1 className={styles.logo}>TheFoodBarn</h1>
            </div>
            <ul>
            <li><Link to="/home"  className={styles.removea} >home</Link></li>
            <li><Link to="/donate" className={styles.removea} >donate</Link></li>
            <li><Link to="/register" className={styles.removea} >register</Link></li>
            <li><Link to="/about" className={styles.removea} >about</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar