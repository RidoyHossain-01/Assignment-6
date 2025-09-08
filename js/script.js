const cartContainer = document.getElementById('cart-container');

let totalPriceContainer = document.getElementById('cart-total');
let cartMoney =parseInt(totalPriceContainer.innerText) 


     const toCart=(id)=>{
          const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch (url)
    .then(res=>res.json())
    .then(data=>{
     createCartElement(data.plants);
     cartCounter(data.plants.price)
    })        
     }
    const cartCounter=(price)=>{
     cartMoney= cartMoney+price;

     totalPriceContainer.innerText = cartMoney;


     }

     const createCartElement =(plant)=>{
           const cartElement= document.createElement('div');
          cartElement.innerHTML=`
          <div id="plant-${plant.id}" class="flex items-center justify-between mb-3 bg-white p-2">
              <div id="" class="cart-items">
                <h4 class="text-xl font-semibold mb-1">${plant.name}</h4>
                <p class="text-sm font-light">৳${plant.price}X1</p>
              </div>
              <div>
                <i class="fa-solid fa-xmark"></i>
              </div>
              
            </div>
          `;
           
            const removeBtn = cartElement.querySelector('i');

            removeBtn.addEventListener("click", () => {
                     cartContainer.removeChild(cartElement);
                     cartMoney=cartMoney-plant.price;
                     totalPriceContainer.innerText = cartMoney;

               });
      
          cartContainer.appendChild(cartElement);
          }
          


const modalDetails =(id)=>{
    
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch (url)
    .then(res=>res.json())
    .then(data=>{
          createModalDetail(data.plants);
          })
       const createModalDetail=(plantData)=>{
        const modalContainer = document.getElementById('modal-info');
          modalContainer.innerHTML=`
  
    <h3 class="text-2xl font-bold mt-2">${plantData.name}</h3>
    <img class="mx-auto rounded-lg h-[150px] md:h-[300px] w-full object-cover" src="${plantData.image}" alt="">
    <p class="pt-2"> <span class="font-bold">Category:</span>${plantData.category}</p>
    <p class=""> <span class="font-bold">Price:</span>৳${plantData.price}</p>
    <p class=""> <span class="font-bold">Description:</span>${plantData.description}</p>
          
          <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button type="submit" class="btn">Close</button>
      </form>
    </div>
    
    `;
          document.getElementById('plant_details_modal').showModal()
          
       }
    
}



const loading =(status)=>{

     const cardContainer= document.getElementById('tree-cards');
     const loader =document.getElementById('loading')
     if (status) {
          cardContainer.classList.add('hidden')
          loader.classList.remove('hidden')
     }
     else{
          
          cardContainer.classList.remove('hidden')
          loader.classList.add('hidden')
     }
}
const removeActive =()=>{
     const removeActiveBtn=document.querySelectorAll('.category-btn');
     removeActiveBtn.forEach(btn => {
          btn.classList.remove('active')
     });
}
const showCategoryCards =(id)=>{
     loading(true);
     removeActive()
     const activeCategoryBtn=document.getElementById(`category-btn-${id}`)
          activeCategoryBtn.classList.add('active');
     const url = `https://openapi.programming-hero.com/api/category/${id}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>{
          
          createCategoryCards(data.plants);
     
     })
}

const createCategoryCards =(plantsInfo)=>{
     const categoryCardContainer = document.getElementById('tree-cards'); 
     categoryCardContainer.innerHTML=``;   
     plantsInfo.forEach(plant => {
          const createCard = document.createElement('div')
          createCard.innerHTML=`
          <div class="card bg-base-100 shadow-sm h-[500px]">
  <figure class="h-[250px] w-full">
    <img class="h-full w-full object-cover"
      src="${plant.image}"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 id="plant-${plant.id}"onclick="modalDetails(${plant.id})" class="card-title">${plant.name}</h2>
    <p>${plant.description}</p>
    <div class="flex justify-between items-center mb-3">
      <div class="badge bg-green-100 text-green-500 shadow-md">${plant.category}</div>
      <div>
        <p class="font-semibold">৳${plant.price}</p>
      </div>
    </div>
    
    <div class="card-actions">
      <button id="cart-btn${plant.id}" onclick="toCart(${plant.id})" class="btn bg-[#15803D] text-gray-100 w-full rounded-full">Add to Cart</button>
    </div>
  </div>
</div>
          `;
          categoryCardContainer.appendChild(createCard);

     });
     loading(false)

     
}


const loadCategoryBtn =()=>{
     const url ='https://openapi.programming-hero.com/api/categories'
     fetch (url)
     .then(res=>res.json())
     .then(data=>createCategoryBtn(data.categories))

     const createCategoryBtn=(categories)=>{
          const categoryContainer=document.getElementById('categories');

          categories.forEach(category => {
               const newCategoryBtn=document.createElement('div')
          newCategoryBtn.innerHTML=`
           <button onclick="showCategoryCards(${category.id})" id="category-btn-${category.id}" class="btn btn-ghost w-full rounded-lg hover:bg-[#189646d3] hover:text-white category-btn">${category.category_name}</button>
          `;
          categoryContainer.appendChild(newCategoryBtn)
          
          });
          
          
          
     }
}
const allPlantsLoader=()=>{ 
     loading(true)
     const url ='https://openapi.programming-hero.com/api/plants';
     fetch(url)
     .then(res=>res.json())
     .then(data=>createCategoryCards(data.plants))
}
allPlantsLoader()
loadCategoryBtn()