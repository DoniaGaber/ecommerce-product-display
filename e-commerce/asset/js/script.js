async function getProduct() {
    const loadingIndicator = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    
    loadingIndicator.style.display = 'block'; // Show loading indicator
    errorMessage.style.display = 'none'; // Hide error message initially

    try {
        const reqs = await fetch('https://fakestoreapi.com/products');
        
        if (!reqs.ok) {
            throw new Error('Network response was not ok');
        }

        const finalresult = await reqs.json();
        finalresult.forEach(element => {
            document.querySelector(".section__product_boxes").innerHTML += `<div class="section__product_boxes__box">
                <div class="image">
                    <img src=${element.image} alt="">
                </div>
                <h3>${element.title.length < 20 ? element.title : element.title.slice(0, 20) + '....'}</h3>
                <span>${element.price} $</span>
                <p>${element.rating.rate}</p>
            </div>`;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        errorMessage.style.display = 'block'; // Show error message
        errorMessage.textContent = error

    } finally {
        loadingIndicator.style.display = 'none'; // Hide loading indicator
    }
}

getProduct()
const toggleButton = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});
