<template>

    <section>
        <!-- receber os hamburguers via vuex e listar os componentes(cards) de hamburguer -->
        <h2>Carrinho de compras</h2>
        <h3 v-if="price > 0">Total da compra R${{ price.toFixed(2) }}</h3>
        <div class="container">
          <Hamburguer v-for="item in data" :key="item.id" :nomeProp="item.name" :precoProp="item.price" :categoriaProp="item.category" :burger="item" :removeItemFromCart="removeItemFromCart" />
        </div>
    </section>
   
</template>

<script>
export default {
  name: 'CarrinhoComprasComponent',
}
</script>

<script setup>
import Hamburguer from './Hamburguer.vue';

defineProps({
  data: Array,
  removeItemFromCart: Function,
  price: Number,
  total: Number
})

</script>

<style scoped>
section div{
  display: flex;
}
</style>