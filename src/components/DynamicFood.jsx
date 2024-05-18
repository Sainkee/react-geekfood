import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFoodById } from "./APIManeger";

export default function DynamicFood() {
  const { id } = useParams();
  const [recipe, setFoodItem] = useState(null);
  console.log(id);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFoodById(id);
        const result = await JSON.parse(data);
        setFoodItem(result);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-black shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <p className="text-gray-700">
          <strong>Servings:</strong> {recipe.servings}
        </p>
        <p className="text-gray-700">
          <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
        </p>
        <p className="text-gray-700">
          <strong>Health Score:</strong> {recipe.healthScore}
        </p>
        <p className="text-gray-700">
          <strong>Price per Serving:</strong> $
          {recipe.pricePerServing.toFixed(2)}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id} className="text-gray-700">
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        ></p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Wine Pairing</h2>
        <p className="text-gray-700 mb-2">{recipe.winePairing.pairingText}</p>
        <div className="flex items-center">
          {recipe.winePairing.productMatches.map((wine) => (
            <div key={wine.id} className="flex-1 mr-4">
              <img
                src={wine.imageUrl}
                alt={wine.title}
                className="w-full h-auto rounded-lg mb-2"
              />
              <h3 className="text-xl font-bold">{wine.title}</h3>
              <p className="text-gray-700">{wine.description}</p>
              <span className="flex items-center gap-5 my-4">
                <p className="text-gray-700">
                  <strong>Price:</strong> {wine.price}
                </p>
                <a
                  href={wine.link}
                  className="rounded-full hover:underline bg-orange-400 text-white py-2 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <a
          href={recipe.sourceUrl}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Recipe at {recipe.sourceName}
        </a>
      </div>
    </div>
  );
}
