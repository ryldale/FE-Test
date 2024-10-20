import { useEffect, useState } from "react";
import Card from "../components/card";
import { fetchSportsItems } from "../api/mockSportsApi";
import { SportsItem } from "../types/type";
import SearchAndFilter from "../../SearchAndFilter/pages/page";

const Sports = () => {
  const [sportsItems, setSportsItems] = useState<SportsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Start");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [starred, setStarred] = useState<boolean[]>([]);

  useEffect(() => {
    const getSportsItems = async () => {
      setLoading(true);
      try {
        const items = await fetchSportsItems();
        setSportsItems(items as SportsItem[]);

        const storedStarred = JSON.parse(
          localStorage.getItem("starredItems") || "[]"
        );
        const initialStarred = new Array(items.length).fill(false);

        storedStarred.forEach((index: number) => {
          if (index < initialStarred.length) {
            initialStarred[index] = true;
          }
        });

        setStarred(initialStarred);
      } catch (err) {
        setError("Failed to load sports items");
      } finally {
        setLoading(false);
      }
    };

    getSportsItems();
  }, []);

  const toggleStar = (index: number) => {
    const newStarred = [...starred];
    newStarred[index] = !newStarred[index];
    setStarred(newStarred);

    const starredIndexes = newStarred
      .map((isStarred, i) => (isStarred ? i : null))
      .filter((i) => i !== null) as number[];

    localStorage.setItem("starredItems", JSON.stringify(starredIndexes));
    console.log("Starred items saved:", starredIndexes);
  };

  const filteredItems = sportsItems
    .filter((item) =>
      activeCategory === "Start"
        ? item.category === "Start"
        : item.randomCategory === activeCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      selectedProvider ? item.provider === selectedProvider : true
    );

  return (
    <>
      <SearchAndFilter
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchTerm}
        onProviderSelect={(provider) => setSelectedProvider(provider)}
      />
      <div className="p-3 h-[470px] overflow-auto no-scrollbar">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                img={item.path}
                isStarred={starred[index]}
                onToggleStar={() => toggleStar(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Sports;
