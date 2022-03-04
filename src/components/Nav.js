import React,{ useState, useEffect } from 'react'
import styles from "../scss/Nav.module.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Nav() {

  const [show, setShow] = useState(false);

  const transitionNav = () => {
    if(window.scrollY > 50){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNav);
    return () => window.removeEventListener('scroll', transitionNav);
  }, [])

  return (
    <div className={`${styles.nav} ${show&& styles.black} ` }>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png" alt="" />
          <ul>
            <li>Homepage</li>
            <li>Series</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className={styles.right}>
          <SearchIcon />
          <span>Kid</span>
          <NotificationsIcon />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
          <div className={styles.dropdown}>
            <ArrowDropDownIcon />
                <div className={styles.options}>
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Nav