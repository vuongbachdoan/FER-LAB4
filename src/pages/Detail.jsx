import { Button, Carousel, Icon, NavItem, Navbar } from "react-materialize";
import Logo from '../assets/images/logo.png';
import Cover from '../assets/images/login_cover.jpg';
import Label from '../assets/images/label.png';
import Movie1 from '../assets/images/movie1.jpg';
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Detail = () => {
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
                    TV Shows
                </NavItem>
                <NavItem>
                    Movie
                </NavItem>
                <NavItem>
                    New & Popular
                </NavItem>

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
                        onClick={() => navigate('/login')}
                    >Log out</Button>
                </NavItem>
            </Navbar>
            <div style={{ width: '100%' }}>
                <div
                    style={{
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <img src={Cover} alt="cover" style={{
                        backgroundSize: 'cover',
                        filter: 'brightness(30%)',
                        width: '100%',
                    }} />
                    <div className="position-absolute top-50 start-0 translate-middle-y z-3 m-5">
                        <div className="d-flex flex-column gap-5">
                            <div style={{ flex: 1 }}>
                                <img src={Label} alt="label" height={175} />
                                <p className="text-light fs-5 text-left my-3">Gifted with superhuman strength, a young woman returns to Korea to find her birth family — only to be entangled in a drug case that could test her power.</p>
                                <Button
                                    node="button"
                                    style={{
                                        marginRight: '5px',
                                        textTransform: 'none',
                                        backgroundColor: '#FAFAFA',
                                        width: 135,
                                    }}
                                    className="fw-medium text-dark"
                                    waves="light"
                                    onClick={() => {
                                        window.scrollTo(0, document.body.scrollHeight);
                                    }}
                                >Play</Button>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p className="text-light">Cast: Lee You-mi, Kim Jung-eun, Kim Hae-sook, more</p>
                                <p className="text-light">Genres: TV Dramas, Korean</p>
                                <p className="text-light">16 Episodes</p>
                                <p className="text-light">Violance, substances</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="player" style={{height: '100vh', width: '100%'}}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=b3N8Usyz8y8"
                        width="100%"
                        height="100%"
                        controls
                    />
                </div>
            </div>
        </>
    );
}