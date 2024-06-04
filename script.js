
const url = "./baze.json";


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`ошибка - ${error}`);
    }
}

const data = await fetchData(url);
console.log(data);

const price = document.querySelector('.price');
data.forEach(element => {
    price.insertAdjacentHTML('beforeend', `
    <div class="item item1">
        <div class="div_img">
            <img class="img_item" src="${element.img}" alt="">
            <div class="but_korzina">
        <button class="add_chart"><svg width="26" height="24" viewBox="0 0 31.9956 29" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <path
                    d="M26.2009 29C25.5532 28.9739 24.9415 28.6947 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1042 25.2097 24.5673 24.756C25.0303 24.3021 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3021 28.0347 24.756C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6947 27.0488 28.9739 26.401 29L26.2009 29ZM6.75293 26.3199C6.75293 25.7899 6.9101 25.2719 7.20459 24.8311C7.49908 24.3904 7.91763 24.0469 8.40735 23.844C8.89706 23.6411 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.4249C11.7028 24.7998 11.9581 25.2773 12.0615 25.7971C12.1649 26.317 12.1118 26.8558 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4811 28.8428 9.96304 29 9.43298 29C9.08087 29.0002 8.73212 28.9312 8.40674 28.7966C8.08136 28.662 7.78571 28.4646 7.53662 28.2158C7.28754 27.9669 7.09 27.6714 6.9552 27.3461C6.8204 27.0208 6.75098 26.6721 6.75098 26.3199L6.75293 26.3199ZM10.553 20.686C10.2935 20.6868 10.041 20.6023 9.83411 20.4457C9.62726 20.2891 9.47757 20.069 9.40796 19.819L4.57495 2.36401L1.18201 2.36401C0.86853 2.36401 0.567871 2.2395 0.346191 2.01782C0.124512 1.79614 0 1.49548 0 1.18201C0 0.86853 0.124512 0.567871 0.346191 0.346191C0.567871 0.124512 0.86853 0 1.18201 0L5.46301 0C5.7225 -0.000854492 5.97504 0.0837402 6.18176 0.240601C6.38849 0.397461 6.53784 0.61792 6.60693 0.868042L11.4399 18.323L24.6179 18.323L29.001 8.27502L14.401 8.27502C14.2428 8.27966 14.0854 8.25244 13.9379 8.19507C13.7904 8.1377 13.6559 8.05139 13.5424 7.94104C13.4288 7.83081 13.3386 7.69885 13.277 7.5531C13.2154 7.40735 13.1836 7.25073 13.1836 7.09253C13.1836 6.9342 13.2154 6.77759 13.277 6.63184C13.3386 6.48608 13.4288 6.35413 13.5424 6.2439C13.6559 6.13367 13.7904 6.04724 13.9379 5.98999C14.0854 5.93262 14.2428 5.9054 14.401 5.91003L30.814 5.91003C31.0096 5.90991 31.2022 5.95862 31.3744 6.05176C31.5465 6.14478 31.6928 6.2793 31.7999 6.44299C31.9078 6.6073 31.9734 6.79565 31.9908 6.99146C32.0083 7.18726 31.9771 7.38428 31.9 7.56506L26.495 19.9771C26.4026 20.1876 26.2509 20.3668 26.0585 20.4927C25.866 20.6187 25.641 20.6858 25.411 20.686L10.553 20.686Z"
                    fill="#E8E8E8" fill-opacity="1.000000" fill-rule="nonzero" />
            </svg>Add to Chart</button>
    </div>
        </div>
    
    <div class="text3">
        <h1 class="head_item">${element.header}</h1>
        <p class="par_item">${element.paragraph}</p>
        <p class="price_item">$${element.price}</p>
    </div>
</div>
    `)

});

const add_chart_buttons = document.querySelectorAll('.add_chart');
const wrapper = document.querySelector('.wrapper');


console.log(add_chart_buttons);

add_chart_buttons.forEach(element => {
    console.log(element);
    element.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            wrapper.insertAdjacentHTML('beforeend', `
    <div class="cart">
   <img src="${element.img}" alt="${element.header}">
   <div class="info">
       <h2 class="card_tittle">${element.header}</h2>
       <div class="cart-content">
           <p class="card_item">Price: <span class="color_pink">${element.price}</span> </p>
           <p class="card_item">Color: <span class="color_grey">${element.color}</span></p>
           <p class="card_item">Size: <span class="color_grey">${element.size}</span> </p>
           <p class="card_item">Quantity: <input type="number" value="${element.quantity}" max="9"> </p>
       </div>
       <button class="close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                   d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                   fill="#575757" />
           </svg></button>
   </div>
</div>
    `)

        }
    });
})

