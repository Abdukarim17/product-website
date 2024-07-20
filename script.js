
const form = document.querySelector('.form');

const productInput = document.getElementById('name')
const priceInput = document.getElementById('price')
const descriptionInput = document.getElementById('description')
const imageInput = document.getElementById('image')



let products = JSON.parse(localStorage.getItem('products')) || [];



form.onsubmit = handleSubmit;

function handleSubmit(event){
    event.preventDefault()

    
    const product = {
        name: productInput.value, 
        price: priceInput.value,
        description: descriptionInput.value,
        image: imageInput.value
    }
    
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
    form.reset()
    console.log(products);
}

(
    renderProducts
    
)()


function renderProducts(){

    const container = document.querySelector('.container');
    container.innerHTML = ''
    
    products.map(product=>
        { const div = document.createElement('div');
        div.className = 'product-cont';

        const image = document.createElement('img');
        image.className = 'product-img';
        image.src = product.image;
        
        const name = document.createElement('p');
        name.className = 'name';
        name.textContent = product.name;
        
        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = product.price+'$';
        
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = product.description;

        const add = document.createElement('button');
        add.className= 'add'
        add.textContent = 'Add to Cart'

        div.append(image)        
        div.append(name);
        div.append(price);
        div.append(description);
        div.append(add)
        
        container.append(div)
        
})
    
}


