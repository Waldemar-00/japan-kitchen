import styles from './Promo.module.css'
import Dishes from './Dishes'
function Promo() {
  return (
    <main className={styles.promo}>
      <h1>Online sushi restaurant - Japan Kitchen</h1>
      <section>
        <p>At this restaurant you can have dishes of Japan Kitchen from professional cook team!</p>
        <p>Fast work and quality products create wonderful dishes that will never <span>be forgetten!</span> </p>
      </section>
      <Dishes />
    </main>
  )
}
export default Promo