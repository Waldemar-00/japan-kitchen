import {v4} from 'uuid'
  const  DataDishes = () => {
  return [
    {
      id: v4(),
      name: 'Ролл "Наоми"',
      description:
        "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 11.99,
    },
    {
      id: v4(),
      name: "Спайс в лососе",
      description: "Рис, лосось, соус спайс",
      price: 3.99,
    },
    {
      id: v4(),
      name: "Суши с угрем",
      description: "Угорь копченый, соус унаги, кунжут",
      price: 4.99,
    },
    {
      id: v4(),
      name: 'Салат "Поке с лососем"',
      description:
        "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
      price: 7.99,
    },
  ];
}
export default DataDishes
