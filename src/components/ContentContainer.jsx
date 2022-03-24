import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MyContext from '../context/MyContext';
import Card from './Card';

const ContentContainer = () => {
  const { data } = useContext(MyContext);

  if (data.loading) return <p>Loading...</p>;
  if (data.error) return <p>{data.error}</p>;

  const recipeList =
    data.results.length > 0 ? (
      data.results.map((recipe) => (
        <Card key={uuidv4()} recipe={recipe.recipe} />
      ))
    ) : (
      <h2>Please try again</h2>
    );

  return <section>{recipeList}</section>;
};

export default ContentContainer;
