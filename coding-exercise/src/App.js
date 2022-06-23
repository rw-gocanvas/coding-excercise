import './App.css';
import { useEffect, useState } from 'react';
import { AnimalCard } from './components/AnimalCard';
import { FetchButton } from './components/FetchButton';

export default function App() {
  const [animalData, setAnimalData] = useState(null);
  const [visible, setVisible] = useState(false);


  const cardData = () => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then ((res) => res.json())
    .then(setAnimalData)
  };

  const loadAnimal = () => {
    if (animalData && !visible) {
      setVisible(true)
    } else if (animalData && visible) {
      cardData();  
    }
    return;
  };

  useEffect(() => {
    cardData();
  }, []);

  const renderCard = (animal) => {
    const {
      name,
      latin_name,
      animal_type,
      active_time,
      length_min,
      length_max,
      weight_min,
      weight_max,
      lifespan,
      habitat,
      diet,
      geo_range,
      image_link,
      id
    } = animal;

    return (
      <AnimalCard
        name={name}
        latin_name={latin_name}
        animal_type={animal_type}
        active_time={active_time}
        length_min={length_min}
        length_max={length_max}
        weight_min={weight_min}
        weight_max={weight_max}
        lifespan={lifespan}
        habitat={habitat}
        diet={diet}
        geo_range={geo_range}
        image_link={image_link}
        id={id}
      />
    )
  }


  return (
    <div className="App">
      <FetchButton visible={visible} animalData={animalData} type = "button" onClick={loadAnimal} />
        {animalData && visible && renderCard(animalData)}
    </div>
  );
}