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
import { useEffect, useState } from "react";
import { getMovies } from "../assets/apis/movie";

export const Home = () => {
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies()
            .then((res) => {
                setMovies(res.movies)
            })
    }, []);

    const[currentMovie, setCurrentMovie] = useState(null)
    useEffect(() => {
        setInterval(() => {
            const randomNumber = Math.random();
            const result = Math.floor(randomNumber * (movies.length - 1));
            setCurrentMovie(movies[result]);
        }, 5000)
    }, [movies])

    // {
    //     "_id": 2734,
    //     "backdrop_path": "https://image.tmdb.org/t/p/original/9xxLWtnFxkpJ2h1uthpvCRK6vta.jpg",
    //     "first_aired": "1999-09-20",
    //     "genres": [
    //       "Crime",
    //       "Drama",
    //       "Mystery"
    //     ],
    //     "original_title": "Law & Order: Special Victims Unit",
    //     "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
    //     "poster_path": "https://image.tmdb.org/t/p/original/ywBt4WKADdMVgxTR1rS2uFwMYTH.jpg",
    //     "title": "Law & Order: Special Victims Unit",
    //     "contentType": "show"
    //   }
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
                <NavItem onClick={() => navigate('/')}>
                    TV Shows
                </NavItem>
                <NavItem onClick={() => navigate('/')}>
                    Movie
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
                        minHeight: '100vh',
                        height: '100vh'
                    }}
                >
                    <img src={currentMovie?.backdrop_path} alt="cover" style={{
                        backgroundSize: 'cover',
                        filter: 'brightness(30%)',
                        width: '100%',
                        height: '100vh',
                    }} />
                    <div className="position-absolute top-50 start-0 translate-middle-y z-3 m-5">
                        <div style={{height: 175}}><img src={currentMovie?.poster_path} alt="label" height={175} /></div>
                        <p className="text-light fs-5 text-left my-3">{currentMovie?.title}</p>
                        <p className="text-light fs-5 text-left my-3">{currentMovie?.overview}</p>
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
                            onClick={() => navigate(`/detail/${currentMovie._id}`)}
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
                            onClick={() => navigate(`/detail/${currentMovie._id}`)}
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
                        {
                            movies.map((movie) => (
                                <SwiperSlide
                                    onClick={() => navigate(`/detail/${movie._id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={movie?.backdrop_path} height={150} width='100%' className="rounded" style={{ objectFit: 'cover' }} alt="mv" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

        </>
    );
}