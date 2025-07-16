document.addEventListener("DOMContentLoaded",()=>{
  const lazyImgs=document.querySelectorAll("img.lazy");
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const img=entry.target;
        img.src=img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });
  lazyImgs.forEach(img=>observer.observe(img));
});
function addToCart(id){
  let cart=JSON.parse(localStorage.getItem("cart")||"[]");
  cart.push({id:id,quantity:1});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart!");
}
