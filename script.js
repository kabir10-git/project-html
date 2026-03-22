let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalAmount = document.getElementById("totalAmount");
const cartModal = document.getElementById("cartModal");

function addToCart(btn) {
    const p = JSON.parse(btn.closest(".product-card").dataset.product);
    let item = cart.find(i => i.name === p.name);
    if (item) item.qty++;
    else cart.push({ ...p, qty: 1 });
    save(); update();
}

function update() {
    cartCount.textContent = cart.reduce((a,b)=>a+b.qty,0);
    if(!cart.length){ cartItems.innerHTML="Cart is empty"; totalAmount.textContent=0; return; }
    let total=0;
    cartItems.innerHTML = cart.map((i,idx)=>{ total+=i.price*i.qty; 
        return `<div>${i.name} ($${i.price}) x ${i.qty} 
        <button onclick="change(${idx},1)">+</button>
        <button onclick="change(${idx},-1)">-</button></div>`}).join('');
    totalAmount.textContent = total;
}

function change(i,val){ cart[i].qty+=val; if(cart[i].qty<=0) cart.splice(i,1); save(); update(); }
function toggleCart(){ cartModal.style.display = cartModal.style.display==="flex"?"none":"flex"; }
function checkout(){ if(!cart.length) return alert("Cart empty"); alert("Order placed!"); cart=[]; save(); update(); toggleCart(); }
function save(){ localStorage.setItem("cart",JSON.stringify(cart)); }
update();
