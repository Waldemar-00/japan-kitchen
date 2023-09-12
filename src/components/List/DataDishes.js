import {v4} from 'uuid'
  const  DataDishes = () => {
  return [
    {
      id: v4(),
      name: 'Roll "Naomi"',
      description:
        "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame",
      price: 11.99,
    },
    {
      id: v4(),
      name: "Spice in salmon",
      description: "Rice, salmon, spice sauce",
      price: 3.99,
    },
    {
      id: v4(),
      name: "Sushi with eel",
      description: "Smoked eel, unagi sauce, sesame",
      price: 4.99,
    },
    {
      id: v4(),
      name: 'Salad "Poke with salmon"',
      description:
        "Rice, salmon, cucumber, chuka, nori, tuna flakes, nut sauce",
      price: 7.99,
    },
  ];
}
export default DataDishes
