import React, { useEffect } from 'react'
import Nav from "../components/Nav.js"
import Main from "../components/Main.js"
import Row from "../components/Row.js"
import TopTen from "../components/TopTen.js"

import { useSelector, useDispatch } from 'react-redux';
import { getTrending } from "../redux/TrendingSlice";
import { getOriginals } from "../redux/NetflixOriginalsSlice";
import { getTopRatedMovies, getActionMovies, getComedyMovies, getHorrorMovies, getRomanceMovies,getDocumentaries  } from "../redux/MoviesSlice";

import styles from "../scss/Home.module.css"

function Home() {

  const dispatch = useDispatch();
  const trending = useSelector(state => state.trending.trending);
  const originals = useSelector(state => state.originals.originals);
  const topRated = useSelector(state => state.movies.topRated);
  const action = useSelector(state => state.movies.action);
  const comedy = useSelector(state => state.movies.comedy);
  const horror = useSelector(state => state.movies.horror);
  const romance = useSelector(state => state.movies.romance);
  const documentary = useSelector(state => state.movies.documentary);


  useEffect(() => {
    dispatch(getTrending());
    dispatch(getOriginals());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentaries());
  }, [dispatch])

  return (
    <div className={styles.home} >
        <Nav/>
        <Main/>
        <TopTen movies={trending}/>
        <Row title="Netflix Originals" movies={originals}   />
        <Row title="Top Rated Movies" movies={topRated}/>
        <Row title="Action Movies" movies={action} />
        <Row title="Comedy Movies" movies={comedy} />
        <Row title="Horror Movies" movies={horror}/>
        <Row title="Romance Movies" movies={romance} />
        <Row title="Documentaries" movies={documentary} />
    </div>
  )
}

export default Home