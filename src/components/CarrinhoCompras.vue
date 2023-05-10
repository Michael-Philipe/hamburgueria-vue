<template>

    <section>
        <!-- receber os hamburguers via vuex e listar os componentes(cards) de hamburguer -->
        
        <Hamburguer v-for="item in cart.showData" :key="item.id" :nomeProp="item.name" :precoProp="item.price" :categoriaProp="item.category" :burger="item" />
    </section>

</template>

<script>
export default {
  name: 'CarrinhoComprasComponent',
}
</script>

<script setup>
import Hamburguer from './Hamburguer.vue';
import { useCartStore } from '@/store/CartStore';
const cart = useCartStore()
console.log(cart)
</script>

<style scoped>
</style>