import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import { useHistory, useLocation } from "react-router-dom";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [fiteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={fiteredCatalog} />
      )}
    </>
  );
}
export { Home };
