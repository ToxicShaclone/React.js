import "./estilos.css"
import Logo from "./CartWidget/logo"

const  NavBar = () => {
    return (
        <nav className="menu">
            <div>
                <ul className="menuUl">
                <li><a href="https://www.google.com/">home</a></li>
                <li><a href="https://www.google.com/">galeria</a></li>
                <li><a href="https://www.google.com/">sobre nosotros</a></li>
                <li><a href="https://www.google.com/">contactos</a></li>
            </ul> 
            <Logo/>
            </div>
            
        </nav>
    )
};

export default NavBar
