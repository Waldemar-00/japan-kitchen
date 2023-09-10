import styles from './Header.module.css'
import sushiImg from "../../assets/img/sushi.jpg"
function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Japan Kitchen</h1>
        <button type='button'>Cart</button>
      </header>
      <div className={styles.img}>
        <img src={sushiImg} alt="sushi" />
      </div>
    </>
  )
}
export default Header