const productsJson = `
[
    {
        "id": "1",
        "imgUrl": "img/insta-card-1.png"
    },
    {
        "id": "2",
        "imgUrl": "img/insta-card-1.png"
    },
    {
        "id": "3",
        "imgUrl": "img/insta-card-1.png"
    },
    {
        "id": "4",
        "imgUrl": "img/insta-card-1.png"
    }
]`;

function renderProducts(products) {
    const productsContainer = document.querySelector('.insta-img');
    let html = '';
    for (const product of products) {
        html += `<img src="${product.imgUrl}" alt="${product.id}" width="240" height="auto">
                `;
    }
    productsContainer.innerHTML = html;
}

const products = JSON.parse(productsJson);
renderProducts(products);

