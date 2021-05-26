const productsJson = `
[
    {
        "id": "1",
        "imgUrl": "https://res2.weblium.site/res/5cf4fa65cb00d50023da97a8/5d0cb834f0f46f0024d97027_optimized_500_c500x522-0x0.webp",
    },
    {
        "id": "2",
        "imgUrl": "img/insta-card-2.png",
    },
    {
        "id": "3",
        "imgUrl": "img/insta-card-2.png",
    },
    {
        "id": "4",
        "imgUrl": "img/insta-card-2.png",
    }
]`;

function renderProducts(products) {
    const productsContainer = document.querySelector('.insta-feed');
    let html = '';
    for (const product of products) {
        html += `<img src="${product.imgUrl}" alt="${product.id}">
                <h2>Hello</h2>`;
    }
    productsContainer.innerHTML = html;
}

const products = JSON.parse(productsJson);
renderProducts(products);

