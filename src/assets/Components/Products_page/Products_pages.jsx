// Products_pages.jsx
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import fackheart from "../../images/bal/Favorite_duotone.png";

const brandsList = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 36 },
];

const memoryList = [
  { name: "16GB", count: 65 },
  { name: "32GB", count: 123 },
  { name: "64GB", count: 48 },
  { name: "128GB", count: 50 },
  { name: "512GB", count: 8 },
];

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="pb-6">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-baseline justify-between focus:outline-none"
        aria-expanded={open}
      >
        <h4 className="font-popins font-medium text-[18px] leading-6 text-black">
          {title}
        </h4>
        {open ? <FaChevronDown /> : <FaChevronUp />}
      </button>

      <div className={`pt-6 ${open ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
}

const Products_pages = () => {
  const navigate = useNavigate();

  // bounds (not used for range UI anymore)
  const MIN = 0;
  const MAX = 5000;

  // data + ui states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [minVal, setMinVal] = useState(MIN);
  const [maxVal, setMaxVal] = useState(MAX);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState([]);

  // pagination
  const itemsPerPage = 9; // 3 cols x 3 rows on sm and up
  const [currentPage, setCurrentPage] = useState(1);

  // mobile filter toggle
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // fetch products
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=100");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        if (!mounted) return;
        setProducts(data.products || []);
        // set reasonable initial min/max based on data
        const prices = (data.products || []).map((p) => p.price || 0);
        if (prices.length) {
          const minP = Math.min(...prices);
          const maxP = Math.max(...prices);
          setMinVal(minP);
          setMaxVal(maxP);
        }
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // keep min/max consistent & reset page when filters change
  useEffect(() => {
    if (minVal >= maxVal) {
      setMaxVal(Math.min(minVal + 1, MAX));
    }
    if (maxVal <= minVal) {
      setMinVal(Math.max(maxVal - 1, MIN));
    }
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minVal, maxVal, selectedBrands, selectedMemory]);

  // filter toggles
  const toggleBrand = (name) => {
    setSelectedBrands((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  };
  const toggleMemory = (name) => {
    setSelectedMemory((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  };

  // filtering logic
  const filteredProducts = products.filter((p) => {
    const priceOk = p.price >= minVal && p.price <= maxVal;
    const brandOk =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const memoryOk =
      selectedMemory.length === 0 ||
      selectedMemory.some((m) =>
        (p.title || "").toLowerCase().includes(m.toLowerCase()),
      );
    return priceOk && brandOk && memoryOk;
  });

  // pagination math
  const pageCount = Math.max(
    1,
    Math.ceil(filteredProducts.length / itemsPerPage),
  );
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const getPagerWindow = () => {
    const maxButtons = 5;
    if (pageCount <= maxButtons)
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    let start = Math.max(1, currentPage - 2);
    let end = start + maxButtons - 1;
    if (end > pageCount) {
      end = pageCount;
      start = end - maxButtons + 1;
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // navigate to detail (route + state)
  const goToProduct = (p) => {
    // navigates to /productdetail/:id and also passes product in state
    navigate(`/productdetail/${p.id}`, { state: { product: p } });
  };

  // Reusable sidebar JSX (so we can render it for desktop and inside mobile toggle)
  const Sidebar = (
    <aside>
      <FilterSection className="underline" title="Brand" defaultOpen={true}>
        <div className="pb-4 relative">
          <CiSearch className="absolute left-3 top-3 text-lg" />
          <input
            className="w-full p-2 text-[14px] pl-10 bg-[#F5F5F5] rounded-lg"
            placeholder="Search"
            type="text"
            aria-label="Search brands"
          />
        </div>

        <ul className="space-y-3">
          {brandsList.map((b) => (
            <li key={b.name}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(b.name)}
                  onChange={() => toggleBrand(b.name)}
                  className="w-4 h-4 accent-black"
                />
                <span className="flex items-baseline gap-2 font-popins">
                  <span className="font-medium text-[15px]">{b.name}</span>
                  <span className="text-[12px] text-[rgba(0,0,0,0.45)]">
                    {b.count}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Built-in memory" defaultOpen={false}>
        <div className="pb-4 relative">
          <CiSearch className="absolute left-3 top-3 text-lg" />
          <input
            className="w-full p-2 text-[14px] pl-10"
            placeholder="Search memory"
            type="text"
            aria-label="Search memory"
          />
        </div>

        <ul className="space-y-3">
          {memoryList.map((m) => (
            <li key={m.name}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedMemory.includes(m.name)}
                  onChange={() => toggleMemory(m.name)}
                  className="w-4 h-4 accent-black "
                />
                <span className="flex items-baseline gap-2 font-popins">
                  <span className="font-medium text-[15px]">{m.name}</span>
                  <span className="text-[12px] text-[rgba(0,0,0,0.45)]">
                    {m.count}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title="Protection class" defaultOpen={false}>
        <div className="text-sm text-gray-600">Filters will go here</div>
      </FilterSection>

      <FilterSection title="Screen diagonal" defaultOpen={false}>
        <div className="text-sm text-gray-600">Filters will go here</div>
      </FilterSection>

      <FilterSection title="Screen type" defaultOpen={false}>
        <div className="text-sm text-gray-600">Filters will go here</div>
      </FilterSection>

      <FilterSection title="Battery capacity" defaultOpen={false}>
        <div className="text-sm text-gray-600">Filters will go here</div>
      </FilterSection>
    </aside>
  );

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-6">
          <div className="mb-4">
            <ul className="flex gap-6 py-2">
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href="/"
                >
                  Home
                </a>
              </li>
              <span>
                <FaChevronRight className="text-[#A4A4A4]" />
              </span>
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href="/"
                >
                  Catalog
                </a>
              </li>
              <span>
                <FaChevronRight className="text-[#A4A4A4]" />
              </span>
              <li>
                <a
                  className="font-popins text-black font-medium text-[16px]"
                  href="/productpage"
                >
                  Smartphones
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile filter toggle */}
          <div className="sm:hidden mb-4 flex items-center justify-between">
            <button
              onClick={() => setShowMobileFilters((s) => !s)}
              className="px-4 py-2 border rounded font-popins"
            >
              {showMobileFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <div className="text-sm">
              <span className="font-popins text-[#6C6C6C]">Selected:</span>{" "}
              <span className="font-popins font-medium">
                {loading ? "..." : filteredProducts.length}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* Sidebar: desktop */}
            <div className="hidden sm:block sm:w-[30%]">{Sidebar}</div>

            {/* Sidebar: mobile (collapsible above content) */}
            {showMobileFilters && (
              <div className="block sm:hidden w-full mb-4">{Sidebar}</div>
            )}

            {/* Main content */}
            <div className="w-full sm:w-[70%] flex flex-col items-center">
              <div className="w-full">
                <div className="pb-4 flex justify-between items-baseline w-full">
                  <h3 className="font-medium font-popins text-[16px] text-[#6C6C6C] leading-4">
                    Selected Products:
                    <span className="text-[20px] pl-1.5 text-black">
                      {loading ? "..." : filteredProducts.length}
                    </span>
                  </h3>
                  <div className="hidden sm:flex justify-between items-center border p-3 rounded-lg border-[#D4D4D4] w-[256px]">
                    <h4 className="font-popins font-normal text-[14px] leading-4">
                      By rating
                    </h4>
                    <FaChevronDown />
                  </div>
                </div>

                <div>
                  {error && <div className="text-red-500">Error: {error}</div>}
                  {loading ? (
                    <div className="py-12">Loading products…</div>
                  ) : paginatedProducts.length === 0 ? (
                    <div className="py-12">No products match the filters.</div>
                  ) : (
                    // responsive grid: 1 col on mobile, 3 cols on sm+
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
                      {paginatedProducts.map((p) => (
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => goToProduct(p)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") goToProduct(p);
                          }}
                          key={p.id}
                          className="bg-[#F6F6F6] cursor-pointer hover:shadow-md transition p-0"
                        >
                          <div className="flex justify-end ">
                            <img
                              className="pt-6 pr-4"
                              src={fackheart}
                              alt="favorite"
                              draggable={false}
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <img
                              className="w-40 h-40 object-contain"
                              src={p.thumbnail}
                              alt={p.title}
                              loading="lazy"
                            />
                          </div>

                          <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                            {p.title}
                          </p>
                          <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                            ${p.price}
                          </h4>

                          <div className="button pb-6 pt-6 flex justify-center items-center">
                            {/* stopPropagation so Buy Now doesn't trigger the card click twice */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                // go to detail as well (or checkout flow)
                                navigate(`/productdetail/${p.id}`, {
                                  state: { product: p },
                                });
                              }}
                              className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-8 py-2"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Pagination: only show when there's more than 1 page */}
              {pageCount > 1 && (
                <div className="mt-6 w-full flex justify-center">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="p-1"
                      aria-label="Previous"
                    >
                      <FaChevronLeft />
                    </button>

                    {getPagerWindow().map((num) => (
                      <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`py-1 px-3 rounded-md ${
                          num === currentPage
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {num}
                      </button>
                    ))}

                    {pageCount > 5 && currentPage <= pageCount - 3 && (
                      <div className="py-1 px-3 bg-white rounded-md text-[#737373]">
                        ....
                      </div>
                    )}

                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(pageCount, p + 1))
                      }
                      className="p-1"
                      aria-label="Next"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products_pages;
