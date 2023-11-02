import { useState, useEffect } from 'react'
const DataDishes = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [errorFetch, setError] = useState()
  useEffect(() => {
    function getMeals() {
      setLoading(true)
      const array = []
      return fetch('https://japan-food-a886f-default-rtdb.firebaseio.com/meals.json').then(response => response.json()).then(response => {
          for (let key in response) {
            array.push(response[key])
          }
          setData(array)
          setLoading(false)
        })
    }
    getMeals().catch(err => {
      setLoading(true)
      setError(err.message)
    })
  }, [])
  return { data, isLoading, errorFetch }
}
export default DataDishes
