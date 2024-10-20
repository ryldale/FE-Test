import { useEffect, useState } from "react";
import { fetchSportsItems } from "../../Sports/api/mockSportsApi";
import { SportsItem } from "../../Sports/types/type";
import Card from "../../Sports/components/card";
import SearchAndFilter from "../../SearchAndFilter/pages/page";

const Favorites = () => {
  const [sportsItems, setSportsItems] = useState<SportsItem[]>([]);
  const [starred, setStarred] = useState<boolean[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Start");
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        console.error("Failed to load sports items", err);
      } finally {
        setLoading(false);
      }
    };

    getSportsItems();
  }, []);

  const handleToggleStar = (index: number) => {
    const updatedStarred = [...starred];
    updatedStarred[index] = !updatedStarred[index];

    setStarred(updatedStarred);

    const newStarredItems = updatedStarred
      .map((isStarred, idx) => (isStarred ? idx : null))
      .filter((idx) => idx !== null);

    localStorage.setItem("starredItems", JSON.stringify(newStarredItems));
  };

  const favoriteItems = sportsItems.filter((item, index) => {
    const isStarredItem = starred[index];
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "Start"
        ? item.category === "Start"
        : item.randomCategory === activeCategory;

    const matchesProvider = selectedProvider
      ? item.provider === selectedProvider
      : true;

    return (
      isStarredItem && matchesSearchTerm && matchesCategory && matchesProvider
    );
  });

  return (
    <>
      <SearchAndFilter
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchTerm}
        onProviderSelect={setSelectedProvider}
      />
      <div className="p-3 h-[470px] overflow-auto no-scrollbar">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : favoriteItems.length === 0 ? (
          <div className="text-center">No favorites found</div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {favoriteItems.map((item, index) => (
              <Card
                key={index}
                img={item.path}
                isStarred={starred[sportsItems.indexOf(item)]}
                onToggleStar={() => handleToggleStar(sportsItems.indexOf(item))} //
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
