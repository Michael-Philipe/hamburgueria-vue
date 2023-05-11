<template>

<div className='itens'>
      
      <h2 v-if="burger.qtd" class='bg-title'>{{ burger.qtd }}x ({{ burger.name }})</h2>
      <h2 v-else class='bg-title'>{{ burger.name }}</h2>
      <img :src='burger.img' :alt="burger.name">

      <p>Categoria: {{categoriaProp}}</p>
      <p>Preço: R$ {{precoProp}}</p>
      <p v-if="burger.qtd">Total R${{ burger.price * burger.qtd }}</p>

     <button v-if="stock" @click="()=> addCart(burger.id)">Adicionar carrinho</button>
     <button class="red" v-else @click="() => removeItemFromCart(burger.id,burger.price,burger.qtd)">Remover Item</button>
      </div>


</template>

<script>
export default {
  name: 'HamburguerComponent',
}
</script>

<script setup>





defineProps({
  nomeProp: String,
  categoriaProp: String,
  precoProp: Number,
  burger: Object,
  stock: Boolean,
  addCart: Function,
  removeItemFromCart: Function
})


</script>

<style scoped>

h2{
  margin: 0;
}

img {
  width: 100%;
}
.bg-title{
  /* background-color: #e1dbbb; */
  text-align: center;
}
.red{
  background-color: red;
}
.itens {
  position: relative;
  background-color: #ffe4bf;
  margin: 10px;
  border: 2px solid black;
  box-sizing: border-box;
  max-width: 200px;
  max-height: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;


}
button {
  padding: 5px;
  font-size: 16px;
  color: #fff;
  background-color: steelblue;
  margin-bottom: 6px;
  transition: all 500ms ease-in-out;
  cursor: pointer;
}
p{
  margin: 0;
}

button:hover {
  background-color: coral;
}

.qtd{
  position: absolute;
  right: 8px;
  top: 8px;
  background-color: rgb(7, 56, 14);
  color: #fff;
  font-weight: bold;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
</style>


<!-- pegar props -->