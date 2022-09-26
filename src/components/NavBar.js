import CartWidget from './CartWidget'

function NavBar() {
        return(
            <div>
            <h2>Always Shoes</h2>
            <ul>
                <li><a href='default.asp'>Inicio</a></li>
                <li><a href='about.asp'>Nosotros</a></li>
                <li><a href='contact.asp'>Contacto</a></li>
            </ul>
            <CartWidget />
            </div>
        )
    }



export default NavBar;
