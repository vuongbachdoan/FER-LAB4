import { Button, Carousel, Icon, NavItem, Navbar } from "react-materialize";
import Logo from '../assets/images/logo.png';
import Cover from '../assets/images/login_cover.jpg';
import Label from '../assets/images/label.png';
import Movie1 from '../assets/images/movie1.jpg';
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Home = () => {
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
                    <div className="position-absolute top-50 start-0 translate-middle-y z-3 m-5" style={{ width: 438 }}>
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
                            onClick={() => navigate('/login')}
                        >Play</Button>
                        <Button
                            node="button"
                            style={{
                                marginRight: '5px',
                                textTransform: 'none',
                                backgroundColor: '#FAFAFA25',
                                width: 135,
                            }}
                            className="fw-medium text-light"
                            waves="light"
                            onClick={() => navigate('/detail')}
                        >More infor</Button>
                    </div>
                </div>

                <div className="m-3">
                    <p className="text-light fs-5 text-left my-3 fw-medium">Popular on Netflix</p>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        style={{ paddingLeft: 50, paddingRight: 50 }}
                    >
                        <SwiperSlide
                            onClick={() => navigate('/detail', {itemId: '0'})}
                        >
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Movie1} height={150} width='100%' className="rounded" style={{ objectFit: 'cover'}} alt="mv" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    );
}