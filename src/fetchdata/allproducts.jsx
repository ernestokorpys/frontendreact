const FetchProducts = async() => {
  const urlParams = new URLSearchParams(window.location.search);
  const page = parseInt(urlParams.get("page")) || 1;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/products?page=${page}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Anda fetch");
    return data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default FetchProducts;