import { BottomNav } from "../BottomNav";
import LasagnaImage from "../images/lasagna.jpg";

export const Lasagna = () => {
  return (
    <div>
      <>
        <h1>Lasagna</h1>
        <img src={LasagnaImage} width={300} height={224} />
        <h3>Description</h3>
        <p>
          The following is a description from:{" "}
          <a href="https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/">
            the original recipe's website
          </a>
          <br />
          This lasagna recipe takes a little work, but it is so satisfying and
          filling that it's worth it!
          <br />
          Submitted to AllRecipes by John Chandler
        </p>
        <h3>Ingredients</h3>
        <ul>
          <li>1 pound sweet Italian sausage</li>
          <li>¾ pound lean ground beef</li>
          <li>½ cup minced onion</li>
          <li>2 cloves garlic, crushed</li>
          <li>1 (28 ounce) can crushed tomatoes</li>
          <li>2 (6.5 ounce) cans canned tomato sauce</li>
          <li>2 (6 ounce) cans tomato paste</li>
          <li>½ cup water</li>
          <li>2 tablespoons white sugar</li>
          <li>4 tablespoons chopped fresh parsley, divided</li>
          <li>1 ½ teaspoons dried basil leaves</li>
          <li>1 ½ teaspoons salt, divided, or to taste</li>
          <li>1 teaspoon Italian seasoning</li>
          <li>½ teaspoon fennel seeds</li>
          <li>¼ teaspoon ground black pepper</li>
          <li>12 lasagna noodles</li>
          <li>16 ounces ricotta cheese</li>
          <li>1 egg</li>
          <li>¾ pound mozzarella cheese, sliced</li>
          <li>¾ cup grated Parmesan cheese</li>
        </ul>
        <h3>Steps</h3>
        <ol>
          <li>Gather all your ingredients</li>
          <li>
            Cook sausage, ground beef, onion, and garlic in a Dutch oven over
            medium heat until well browned.
          </li>
          <li>
            Stir in crushed tomatoes, tomato sauce, tomato paste, and water.
            Season with sugar, 2 tablespoons parsley, basil, 1 teaspoon salt,
            Italian seasoning, fennel seeds, and pepper. Simmer, covered, for
            about 1 ½ hours, stirring occasionally.
          </li>
          <li>
            Bring a large pot of lightly salted water to a boil. Cook lasagna
            noodles in boiling water for 8 to 10 minutes. Drain noodles, and
            rinse with cold water.
          </li>
          <li>
            In a mixing bowl, combine ricotta cheese with egg, remaining 2
            tablespoons parsley, and 1/2 teaspoon salt.{" "}
          </li>
          <li>
            To assemble, spread 1 ½ cups of meat sauce in the bottom of a
            9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce,
            overlapping slightly. Spread with 1/2 of the ricotta cheese mixture.
            Top with 1/3 of the mozzarella cheese slices. Spoon 1 ½ cups meat
            sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese.
          </li>
          <li>
            Repeat layers, and top with remaining mozzarella and Parmesan
            cheese. Cover with foil: to prevent sticking, either spray foil with
            cooking spray or make sure the foil does not touch the cheese.{" "}
          </li>
          <li>
            Bake in the preheated oven for 25 minutes. Remove the foil and bake
            for an additional 25 minutes.
          </li>
          <li>Rest lasagna for 15 minutes before serving. </li>
        </ol>
        <footer>
          <BottomNav />
        </footer>
      </>
    </div>
  );
};