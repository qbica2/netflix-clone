import React, { useEffect } from 'react'
import styles from "../scss/Main.module.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useSelector, useDispatch } from 'react-redux';
import { getOriginals } from "../redux/NetflixOriginalsSlice";


function Main() {

    const dispatch = useDispatch();
    const originals = useSelector(state => state.originals.originals);
    console.log(originals);

    useEffect(() => {
      dispatch(getOriginals());
    }, [dispatch])


  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (

    <div className={styles.main} style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${originals?.backdrop_path}")`,
      backgroundPosition: 'center center',
    }}>
      <div className={styles.content}>
        <h1>{originals.name}</h1>
        <p>{truncate(`${originals.overview}`,150)}</p>
        <div className={styles.contentButtons}>
          <button className={styles.playButton}><PlayArrowIcon fontSize="large"/>Play</button>
          <button className={styles.infoButton}><InfoOutlinedIcon fontSize="large"/> More info</button>
        </div>
      </div>
      
    </div>
  )
}

export default Main