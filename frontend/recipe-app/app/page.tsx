import { Hero } from "@/components/home/Hero";
import RecipeSection from "@/components/home/RecipeSeciton";

export default async function page() {
  // const recipeData = await fetch('http://localhost:5000/api/recipe')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data.data.recipes[0].title);
  //   });
  return (
    <div >
      <Hero />
      <RecipeSection />
    </div>
  )
}
