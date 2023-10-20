import { Button, Icon, NavItem, Navbar } from "react-materialize";
import Logo from '../assets/images/logo.png';
import Cover from '../assets/images/login_cover.jpg';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar
                alignLinks="right"
                brand={
                    <img src={Logo} alt="logo" height='44px' style={{ margin: 24 }} />
                }
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1000
                }}
            >
                <NavItem>
                    <Button
                        node="button"
                        style={{
                            marginRight: '5px',
                            textTransform: 'none',
                            backgroundColor: '#E50914',
                        }}
                        className="fw-medium text-light"
                        waves="light"
                        onClick={() => navigate('/')}
                    >Login</Button>
                </NavItem>
            </Navbar>
            <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                <img src={Cover} alt="cover" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundSize: 'cover',
                    filter: 'brightness(30%)'
                }} />
                <div className="position-absolute top-50 start-50 translate-middle z-3">
                    <h1 className="text-light fw-bold text-center" style={{ fontSize: '3rem' }}>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                    <p className="text-light fw-medium fs-5 text-center">Endless entertainment starts at just 70,000 ₫. Cancel anytime.</p>
                </div>
            </div>

        </>
    );
}