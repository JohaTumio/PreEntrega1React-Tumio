import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import NavbarLink from './NavbarLink/NavbarLink';

const Navbar = () => {
    return (
        <header className='position-sticky top-0'>
            <nav className="navbar navbar-expand-lg bg-nav p-1">
                <div className="container-fluid">
                    <div className='d-flex flex-column align-items-center'>
                        <a className="navbar-brand p-0" href=" ">
                            <img src="https://cdn-icons-png.flaticon.com/512/2121/2121917.png" alt="Logo" width={40} height={30} className="d-inline-block" />
                        </a>
                        <h1 className="navbar-brand text-white mb-0 p-0">ElectroSale</h1>
                    </div>
                    <CartWidget />
                    <button className="navbar-toggler bg-white fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <NavbarLink linkNav="Notebooks" />
                    <NavbarLink linkNav="Tablets" />
                    <NavbarLink linkNav="Celulares" />
                    <NavbarLink linkNav="Pc escritorio" />
                    <NavbarLink linkNav="Monitores" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
