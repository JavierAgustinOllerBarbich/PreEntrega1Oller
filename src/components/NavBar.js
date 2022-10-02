import CartWidget from './CartWidget'

function NavBar() {
        return(
            <div>
            <h2>Always Shoes</h2>
            <ul>
                <li><a href='./'>Inicio</a></li>
                <li><a href='./'>Remeras</a></li>
                <li><a href='./'>Pantalones</a></li>
                <li><a href='./'>Shoes</a></li>
                <li><a href='./'>Nosotros</a></li>
                <li><a href='./'>Contacto</a></li>
            </ul>
            <CartWidget />
            </div>
        )
    }



export default NavBar;
