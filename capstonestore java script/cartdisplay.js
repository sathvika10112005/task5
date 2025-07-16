document.addEventListener("DOMContentLoaded",()=>{
  const cart=JSON.parse(localStorage.getItem("cart")||"[]");
  const container=document.getElementById("cart-items");
  if(cart.length===0){
    container.innerHTML="<p>Your cart is empty.</p>";
    return;
  }
  let html="<ul>";
  cart.forEach(item=>{
    html+=`<li>Product ID: ${item.id} — Qty: ${item.quantity}</li>`;
  });
  html+="</ul>";
  container.innerHTML=html;
});
