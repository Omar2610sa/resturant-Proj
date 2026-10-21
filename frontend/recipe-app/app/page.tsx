import { Hero } from "@/components/home/Hero";
import RecipeSection from "@/feature/recipes/components/RecipeSeciton";
import { Suspense } from "react";

export default function page() {

  return (
    <div >
      <Hero />
      <Suspense fallback={<div className="text-center text-2xl font-extrabold text-primary">Loading...</div>}>
      <RecipeSection />
      </Suspense>
    </div>
  )
}
