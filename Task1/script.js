const URL = "https://fakestoreapi.com/products";
const container = document.getElementById('container');

document.getElementById('addProductBtn').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;

  fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify({
      title: title,
      price: parseFloat(price),
      description: description,
      image: image,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('New Product Added:', data);
      addProduct(data);
    })
  .catch(error => console.error('Error:', error));
});

document.getElementById('deleteProductBtn').addEventListener('click', () => {
  const id = document.getElementById('Id').value;
  let num = Number(id);

  if (id) {
      fetch(`${URL}/${id}`, {
          method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
          console.log('Product Deleted:', data);
      })
      .catch(error => console.error('Error deleting product:', error));
  } else {
      alert('Please enter a valid product ID.');
  }
});

function addProduct(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'w-full max-w-lg bg-[#FFFEF6] p-6 rounded-lg shadow-md m-4';
    productDiv.dataset.id = product.id;
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="w-32 h-32 object-contain p-2" />
        <h2 class="text-xl font-semibold mb-2 p-2">${product.title}</h2>
        <p class="p-2">${product.description}</p>
        <p class="p-2"><strong>Price:</strong> $${product.price}</p>
    `;
    container.appendChild(productDiv);
}

function fetchProductsAndRender() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container');
            container.innerHTML = '';
            data.forEach(product => {
                addProduct(product);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

fetchProductsAndRender();