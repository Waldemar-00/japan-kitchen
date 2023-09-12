import styles from './Promo.module.css'
import Dishes from './Dishes'
function Promo() {
  return (
    <main>
      <section className={styles.promo}>
        <h2>Online sushi restaurant - Japan Kitchen</h2>
        <p>At this restaurant you can have dishes of Japan Kitchen from professional cook team!</p>
        <p>Fast work and quality products create wonderful dishes that will never be forgetten! </p>
      </section>
      <Dishes />
    </main>
  )
}
export default Promo