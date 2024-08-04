import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <img src={logo}  alt="Logo" />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#team">Entrenadores</a></li>
          <li><a href="#login">Regístrate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
