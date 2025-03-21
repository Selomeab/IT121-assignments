document.getElementById("fetchButton").addEventListener("click", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();

        // Select a random product
        const randomProduct = products[Math.floor(Math.random() * products.length)];

        // Display product details
        document.getElementById("productImage").src = randomProduct.image;
        document.getElementById("productTitle").textContent = randomProduct.title;
        document.getElementById("productPrice").textContent = `$${randomProduct.price}`;
    } catch (error) {
        console.error("Error fetching product:", error);
    }
});