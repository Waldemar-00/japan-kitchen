import styles from './Substarte.module.css'
function Substrate({ children }) {
  return (
    <div className={styles.substrate}>{children}</div>
  )
}
export default Substrate