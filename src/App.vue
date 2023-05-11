<template>
  
  <Header :showProducts="showProducts" :price="cartTotal"/>
  <main>
    
    <Hamburguers :data="products" :addCart="addCart" :filteredProducts="filteredProducts" :valor="valor"/>
   
    
    <Carrinho :data="currentSale" :price="cartTotal" :removeItemFromCart="removeItemFromCart"/>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import Hamburguers from './components/Hamburguers.vue';
import Carrinho from './components/CarrinhoCompras.vue'
import { ref, onMounted, watch } from 'vue';

const products = ref([])
const filteredProducts = ref([])
const currentSale = ref([])
const cartTotal = ref(0)
const valor = ref(true)

const getDataFromApi = async ()=> {

  try{

  const req = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')

  const data = await req.json()
  
  
  products.value = data
  }catch(error) {
    console.log(error)
  }

  console.log(products.value)
  

}

const showProducts = (input) => {
  if(input === ''){
    valor.value = true
  }else{
    valor.value = false
  }
  
  filteredProducts.value = products.value.filter((item) => item.name.toLowerCase().includes(input.toLowerCase())) 
 
}

const addCart = async (productId) =>  {
  const req = await fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products/${productId}`)

  const data = await req.json()
  
  
  const hasItem = currentSale.value.find((item) => item.id === productId)
  
  if(!hasItem){
    cartTotal.value += data.price
    data.qtd = 1
    currentSale.value.push(data)
  }else {
    currentSale.value.forEach((item) => {
      if(item.id === productId){
        item.qtd++
        cartTotal.value += data.price
      }
    })
  }

  console.log(currentSale.value[0].qtd)
}

const removeItemFromCart = (productId,productValue,qtd) => {
  

  if(qtd === 1){
  const newCartWithItemRemoved = currentSale.value.filter((item) => item.id !== productId)

  currentSale.value = newCartWithItemRemoved

  cartTotal.value -= productValue
  }else{
    currentSale.value.forEach((item) => {
      if(item.id === productId){
        item.qtd--
        cartTotal.value -= productValue
      }
    })
  }
  console.log(currentSale.value)

}

watch(currentSale,(currentValue, oldValue) => {
      console.log(currentValue.qtd);
      console.log(oldValue);
    });

onMounted(()=> {
  getDataFromApi()
  
})

</script>

<style>
html,div,input,nav,header,ul,li {
  display: block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
