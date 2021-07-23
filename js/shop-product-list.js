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
    }
]`;

const productList = JSON.parse(productListJson);

function renderProducts(productList) {
    let html = '';
    for (const product of productList) {
        html += `<div class="product-item">
                <a href="#"><img class="product-list-img" src="${product.imageUrl}" alt="${product.title}"></a>
                <a class="product-name" href="#">${product.title}</a>
                <p class="product-price">$${product.price}</p>
                <button class="product-button" type="button">Buy</button>
            </div>`
        }
        document.querySelector('.productList').innerHTML = html;
    }

    renderProducts(productList);