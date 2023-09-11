import styles from './Header.module.css'
import sushiImg from "../../assets/img/sushi.jpg"
import Button from '../UI/Button'
import CartIcon from '../Cart/CartIcon'
function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Japan Kitchen</h1>
        <Button type='button'>
          <div className={styles.div}><CartIcon/></div>
          <div className={styles.div}>Cart</div>
          <div className={styles.lastInBtn}>12</div>
        </Button>
      </header>
      <div className={styles.img}>
        <img src={sushiImg} alt="sushi" />
      </div>
    </>
  )
}
export default Header