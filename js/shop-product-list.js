const productListJson = `[
    {
        "id": "1",
        "title": "Adidas Black Trainers",
        "imageUrl": "img/shop/adidas-black-trainers.jpg",
        "price": 60
    },
    {
        "id": "2",
        "title": "Adidas Campus",
        "imageUrl": "img/shop/adidas-campus.jpg",
        "price": 130
    },
    {
        "id": "3",
        "title": "Adidas Cloudfoam Trainers",
        "imageUrl": "img/shop/adidas-cloudfoam-trainers.jpg",
        "price": 60
    },
    {
        "id": "4",
        "title": "Adidas Compression Tee",
        "imageUrl": "img/shop/adidas-compression-tee.jpg",
        "price": 33
    },
    {
        "id": "5",
        "title": "Asics Jordan 2000",
        "imageUrl": "img/shop/asics-jordan-2000.jpg",
        "price": 200
    },
    {
        "id": "6",
        "title": "Nike Amanda Running Shoes",
        "imageUrl": "img/shop/nike-amanda-running-shoes.jpg",
        "price": 120
    },
    {
        "id": "7",
        "title": "Nike Classic Polo T-Shirt",
        "imageUrl": "img/shop/nike-classic-polo-t-shirt.jpg",
        "price": 23
    },
    {
        "id": "8",
        "title": "Nike Winter Jacket in Blue",
        "imageUrl": "img/shop/nike-winter-jacket-in-blue.jpg",
        "price": 85
    },
    {
        "id": "9",
        "title": "Puma Basket Shoes",
        "imageUrl": "img/shop/puma-basket-shoes.jpg",
        "price": 140
    },
    {
        "id": "10",
        "title": "Puma Essential Tank Top",
        "imageUrl": "img/shop/puma-essentialtank-top.jpg",
        "price": 43
    },
    {
        "id": "11",
        "title": "Puma Fitness Shoes in Grey",
        "imageUrl": "img/shop/puma-fitness-shoes-in-grey.jpg",
        "price": 85
    },
    {
        "id": "12",
        "title": "Puma Sports Bra",
        "imageUrl": "img/shop/puma-sports-bra.jpg",
        "price": 12
    },
    {
        "id": "13",
        "title": "Puma Textile Running Shoes",
        "imageUrl": "img/shop/puma-textile-running-shoes.jpg",
        "price": 62
    },
    {
        "id": "14",
        "title": "Quicksilver Tech T-Shirt",
        "imageUrl": "img/shop/quicksilver-tech-t-shirt.jpg",
        "price": 21
    },
    {
        "id": "15",
        "title": "Quicksilver Workout Top",
        "imageUrl": "img/shop/quicksilver-workout-top.jpg",
        "price": 12
    },
    {
        "id": "16",
        "title": "Reebok Fitness Jacket",
        "imageUrl": "img/shop/reebok-fitness-jacket.jpg",
        "price": 52
    },
    {
        "id": "17",
        "title": "Reebok Long Sleeve Top",
        "imageUrl": "img/shop/reebok-long-sleeve-top.jpg",
        "price": 18
    },
    {
        "id": "18",
        "title": "Reebok Red Duster",
        "imageUrl": "img/shop/reebok-red-duster.jpg",
        "price": 60
    },
    {
        "id": "19",
        "title": "Reebok Workout Shorts",
        "imageUrl": "img/shop/reebok-workout-shorts.jpg",
        "price": 25
    }
]`;

const productList = JSON.parse(productListJson);

function renderProducts(productList, sortOrder) {
    const sortedProductList = [...productList].sort(
        (a, b) => sortOrder === 'ascending' ? a.price - b.price : b.price - a.price       
      );
    let html = '';
    for (const product of sortedProductList) {
        html += `<div class="product-item">
                <a href="#"><img class="product-list-img" src="${product.imageUrl}" alt="${product.title}"></a>
                <a class="product-name" href="#">${product.title}</a>
                <p class="product-price">$${product.price}</p>
                <button class="product-button" type="button">Buy</button>
            </div>`
        }
        document.querySelector('.product-list').innerHTML = html;
    }

    renderProducts(productList);

    renderProducts(productList, 'ascending');

const btnSortAsc = document.querySelector('.sort-asc');
const btnSortDesc = document.querySelector('.sort-desc');

function sortAsc() {
    renderProducts(productList, 'ascending');
}

function sortDesc() {
    renderProducts(productList, 'descending');
}

btnSortAsc.addEventListener('click', sortAsc);
btnSortDesc.addEventListener('click', sortDesc);