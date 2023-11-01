import { useState, useEffect } from 'react'
const DataDishes = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    function getMeals() {
      const array = []
      fetch('https://post-joke-default-rtdb.firebaseio.com/meals.json')
        .then(response => response.json())
        .then(response => {
          for (let key in response) {
            array.push(response[key])
          }
          setData(array)
        })
    }
    getMeals()
  }, [])
  return data
}
export default DataDishes
