
const FetchFilterProducts = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const minCost = parseInt(urlParams.get("minCost")) || 0;
  const maxCost = parseInt(urlParams.get("maxCost")) || 1000000;
  const keyword = urlParams.get("keyword");
  const page = parseInt(urlParams.get("page")) || 1;
  
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/filterproducts?page=${page}&minCost=${minCost}&maxCost=${maxCost}&keyword=${keyword}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


export default FetchFilterProducts;