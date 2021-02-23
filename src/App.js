import { useEffect, useState } from 'react';

import meals from './meals';

function App() {
  const [showAll, setShowAll] = useState(false);
  const [meal, setMeal] = useState('');

  const getRandomMeal = () => {
    const randomMealIndex = Math.floor(Math.random() * meals.length)

    const newMeal = meals[randomMealIndex];

    setMeal(newMeal);
  }

  useEffect(() => {
    getRandomMeal();
  }, []);

  return (
    <div>
      <main>
        {!showAll && <div id="randomMeal">
          <h1>{meal}</h1>
          <button onClick={() => getRandomMeal()}>Next</button>
        </div>}
        {showAll && <div>
          <ul>
            {meals.map(mealItem => <li key={mealItem}>{mealItem}</li>)}
          </ul>
        </div>}
        <button id="showAll" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Random" :  "Show All"}</button>
      </main>
    </div>
  );
}

export default App;
