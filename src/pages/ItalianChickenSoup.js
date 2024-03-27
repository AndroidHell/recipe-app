import { BottomNav } from "../BottomNav";
import ItalianChickenSoupImage from "../images/italianChickenSoup.jpg";

export const ItalianChickenSoup = () => {
  return (
    <div>
      <>
        <h1>Italian Chicken Soup</h1>
        <img src={ItalianChickenSoupImage} width={300} height={450} />
        <h3>Description</h3>
        <p>
          The following is a description from:{" "}
          <a href="https://withthewoodruffs.com/creamy-italian-ground-chicken-soup/">
            the original recipe's website
          </a>
          <br />
          Lean ground chicken, Italian seasoning, garlic, and Calabrian peppers
          join forces with your favorite pasta, green peas, and a low fat lemon
          ricotta cheese sauce to make this high protein creamy ground chicken
          soup.
        </p>
        <h3>Ingredients</h3>
        <h4>For the Soup</h4>
        <ul>
          <li>1/2 Tablespoon Olive Oil</li>
          <li>1 pound Ground Chicken</li>
          <li>2 teaspoons Italian Seasoning</li>
          <li>3 cloves Garlic, crushed or minced</li>
          <li>1 Tablespoon Chopped Calabrian Peppers* (optional)</li>
          <li>4 cups Reduced Sodium Chicken Broth</li>
          <li>8 oz Farfalle or Bowtie Pasta</li>
          <li>1 cup (170g) Frozen Peas</li>
          <li>2 oz Parmigiano Reggiano or Parmesan, freshly grated</li>
        </ul>
        <h4>For the Ricotta Sauce</h4>
        <ul>
          <li>15 oz (1 3/4 cup) Low Fat Ricotta</li>
          <li>1/2 cup Milk</li>
          <li>Juice of 2 Lemons + Zest of 1 Lemon</li>
          <li>Black Pepper, to taste</li>
        </ul>
        <br />
        <h3>Steps</h3>
        <ol>
          <li>
            Heat a Dutch oven or large soup pot over medium-high heat with the
            olive oil. Once hot, add the ground chicken and leave untouched for
            3-4 minutes to brown one side before breaking apart and fully
            cooking.
          </li>
          <li>
            To the fully cooked chicken, add the Italian seasoning, garlic, and
            Calabrian chiles. Stir everything together and cook for 30-60
            seconds until the garlic is fragrant.
          </li>
          <li>
            Add a few tablespoons of the chicken broth to deglaze the pot, if
            necessary, before adding the pasta and remaining broth. Cover and
            cook for 10 minutes, stirring every 3-4 minutes.
          </li>
          <li>
            While the pasta cooks, add the ricotta sauce ingredients to a food
            processor or large cup to blend with an immersion blender. Blend
            together until smooth and set aside.
          </li>
          <li>
            Once the pasta has cooked for 10 minutes, turn off the heat and
            remove the cover from the pot. Add the frozen peas and stir into the
            soup, bringing the peas up to temperature and slightly cooling the
            soup. Once the peas are incorporated, add the ricotta sauce and stir
            everything together. Finally, stir in the grated cheese.
          </li>
          <li>
            Serve immediately while warm. Garnish with additional grated
            parmesan, Calabrian chiles, black pepper, fresh basil, and a squeeze
            of lemon juice, if desired. (If you're not serving right away, place
            the soup over a low heat to keep warm.)
          </li>
        </ol>
        <footer>
          <BottomNav />
        </footer>
      </>
    </div>
  );
};
