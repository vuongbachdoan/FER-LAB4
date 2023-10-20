import { Button, Carousel, Icon, NavItem, Navbar } from "react-materialize";
import Logo from '../assets/images/logo.png';
import Cover from '../assets/images/login_cover.jpg';
import { useNavigate, useParams } from "react-router-dom";
import Star from '../assets/icons/star.png';
import ReactPlayer from 'react-player';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { getMovie } from "../assets/apis/movie";

export const Detail = () => {
    const navigate = useNavigate();
    const { itemId } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        console.log(itemId)
        getMovie(itemId)
            .then((res) => {
                console.log(res?.movie)
                setMovie(res?.movie)
            })
        // {
        //     "movie": {
        //       "_id": 27205,
        //       "backdrop_path": "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        //       "genres": [
        //         "Action & Adventure",
        //         "Sci-Fi & Fantasy",
        //         "Action & Adventure"
        //       ],
        //       "original_title": "Inception",
        //       "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        //       "poster_path": "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        //       "release_date": "2010-07-15",
        //       "title": "Inception",
        //       "vote_average": 8.362,
        //       "vote_count": 33655,
        //       "youtube_trailer": "https://www.youtube.com/watch?v=JE9z-gy4De4",
        //   }
    }, [itemId])

    const scrollToTop = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }

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
                                <img src={movie?.poster_path} alt="label" height={300} />
                                <p className="text-light fs-5 text-left my-3">{movie?.title}</p>
                                <div className="d-flex flex-row align-items-center gap-3">
                                    <img src={Star} width={24} height={24} />
                                    <span className="text-light p-0">{movie?.vote_average}({movie?.vote_count} votes)</span>
                                </div>
                                <p className="text-light fs-5 text-left my-3">{movie?.overview}</p>
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
                                    onClick={scrollToTop}
                                >Play</Button>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div className="d-flex mb-3">
                                    {
                                        movie?.genres.map((item) => <span className="badge text-bg-danger">{item}</span>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    movie?.youtube_trailer &&
                    <div id="player" style={{ height: '100vh', width: '100%' }}>
                        <ReactPlayer
                            url={movie?.youtube_trailer}
                            width="100%"
                            height="100%"
                            controls
                        />
                    </div>
                }
            </div>
        </>
    );
}