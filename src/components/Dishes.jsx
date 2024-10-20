import { DISHES } from "../constants";
import DishCard from "./DishCard";

function Dishes() {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        {DISHES.map((dish, idx) => (
          <DishCard key={idx} dish={dish} />
        ))}
      </div>
    </section>
  );
}

export default Dishes;
