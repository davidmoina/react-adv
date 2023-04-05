import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {

  const { increaseBy, counter } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
      <span className={styles.countLabel}>{counter}</span>
      <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>+</button>
    </div>
  )
}