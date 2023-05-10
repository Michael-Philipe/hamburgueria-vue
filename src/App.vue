<template>
  
  <Header/>
  <main>
    <Hamburguers/>
    <Carrinho/>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import Hamburguers from './components/Hamburguers.vue';
import Carrinho from './components/CarrinhoCompras.vue'
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
  justify-content: space-between;
}
</style>
