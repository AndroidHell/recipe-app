import { BottomNav } from "../BottomNav";
import PastaWithPeasImage from "../images/pastawithpeas.jpg";

export const PastaWithPeas = () => {
  return (
    <div>
      <>
        <h1>Pasta With Peas</h1>
        <img src={PastaWithPeasImage} width={300} height={427} />
        <h3>Description</h3>
        The following is a description from:{" "}
        <a href="https://theclevermeal.com/pasta-with-peas/#recipe">
          the original recipe's website
        </a>
        <br />
        <p>
          This creamy quick pasta with peas is a simple and super easy delicious
          one-pot dinner recipe that uses minimal ingredients. It's the perfect
          midweek meal, it's ready in 15 minutes and tastes so delicious!
        </p>
        <h3>Ingredients</h3>
        <ul>
          <li>1 lb (450 grams) Peas, fresh or frozen</li>
          <li>
            1/2 lb (220 grams Short shaped pasta (shells, elbows, ditaloni...)
          </li>
          <li>1/2 cup (50 grams) grated parmesan cheese, plus more to serve</li>
          <li>2 cups (500 ml) vegetable broth or water, plus more if needed</li>
          <li>1 small onion, diced</li>
          <li>1 Tbsp olive oil, plus more for drizzling</li>
          <li>salt &amp; pepper, to taste</li>
        </ul>
        <h3>Steps</h3>
        <ol>
          <li>
            Warm the olive oil in a large pot over medium heat. Add the diced
            onion and cook until the onion has softened and is turning
            translucent, about 5 minutes.
          </li>
          <li>Add the peas and cook stirring frequently about 1 minute. </li>
          <li>
            Then add vegetable broth (or water), raise the heat, bring to a boil
            and stir in pasta and salt (I use 1 tsp of salt and then I adjust
            the seasoning at the end).
          </li>
          <li>
            Reduce the heat, cover with a lid, and cook your pasta in the
            starchy water. During the cooking time, you need to stir often until
            the water is absorbed, otherwise, it will stick to the bottom. The
            water should barely cover the pasta, but it's fine, add extra water
            gradually only if needed.
          </li>
          <li>
            Cook until ready but firm to the bite. Turn off the heat and stir in
            freshly grated parmesan cheese until melted. Taste and adjust the
            seasoning.
          </li>
          <li>
            Serve immediately with a drizzle of olive oil, black pepper, and
            extra parmesan cheese if you like. Enjoy!
          </li>
        </ol>
        <footer>
          <BottomNav />
        </footer>
      </>
    </div>
  );
};
