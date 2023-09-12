import styles from './Header.module.css'
import sushiImg from "../../assets/img/sushi.jpg"
import Button from '../UI/Button'
import CartIcon from '../Cart/CartIcon'
import {v4} from 'uuid'
function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Japan Kitchen</h1>
        <Button type='button'>
          <div className={styles.div} key={v4()}><CartIcon/></div>
          <div className={styles.div} key={v4()}>Cart</div>
          <div className={styles.lastBtn} key={v4()}>12</div>
        </Button>
      </header>
      <div className={styles.img}>
        <img src={sushiImg} alt="sushi" />
      </div>
    </>
  )
}
export default Header