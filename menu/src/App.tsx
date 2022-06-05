import { useState } from "react";
import { Categories } from "./components/Categories";
import { Menu } from "./components/Menu";
import items from "./data";

const allCategories = (categories: string[]) => {
  const catSet = new Set<string>();
  catSet.add("all");
  categories.forEach((cat) => catSet.add(cat));
  return Array.from(catSet);
};

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(
    allCategories(items.map((item) => item.category))
  );

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    setMenuItems(items.filter((item) => item.category === category));
  };

  return (
    <main>
      <h1 className="text-3xl underline underline-offset-2 text-center">
        Le Menu
      </h1>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
