import { useState, useEffect } from 'react'
const DataDishes = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    function getMeals() {
      setLoading(true)
      const array = []
      fetch('https://post-joke-default-rtdb.firebaseio.com/meals.json')
        .then(response => response.json())
        .then(response => {
          for (let key in response) {
            array.push(response[key])
          }
          setData(array)
          setLoading(false)
        })
    }
    getMeals()
  }, [])
  return { data: data, isLoading: isLoading }
}
export default DataDishes
