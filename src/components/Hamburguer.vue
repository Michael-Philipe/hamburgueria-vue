<template>

<div className='itens'>
      <h2>{{nomeProp}}</h2>
      <p>Categoria: {{categoriaProp}}</p>
      <p>Preço: R$ {{precoProp}}</p>
     <button v-if="stock" @click="data.increment(burger)">Adicionar carrinho</button>
     <button v-else @click="data.decrement(burger)">Remover do carrinho</button>
      </div>


</template>

<script>
export default {
  name: 'HamburguerComponent',
}
</script>

<script setup>
import { useCartStore } from '@/store/CartStore';


const data = useCartStore()




defineProps({
  nomeProp: String,
  categoriaProp: String,
  precoProp: String,
  burger: Array,
  stock: Boolean
})


</script>

<style scoped>
.itens {
  margin: 10px;
  border: 2px solid black;
  box-sizing: border-box;
  width: 180px;
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

button:hover {
  background-color: coral;
}

</style>


<!-- pegar props -->