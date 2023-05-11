<template>

    <section class="hamburguers-container">
        <!-- receber os hamburguers via vuex e listar os componentes(cards) de hamburguer -->
        
        <Hamburguer v-if="valor" v-for="item in data" :key="item.id" :nomeProp="item.name" :precoProp="item.price" :categoriaProp="item.category" :burger="item" :stock="true" :addCart="addCart"/>
        <Hamburguer v-else v-for="item in filteredProducts" :nomeProp="item.name" :precoProp="item.price" :categoriaProp="item.category" :burger="item" :stock="true" :addCart="addCart"/>
        
    </section>

</template>

<script>
export default {
  name: 'HamburguersComponent',

}
</script>

<script setup>
import Hamburguer from '@/components/Hamburguer.vue'
// import { onMounted, ref} from 'vue';



//como pegar o valor do ref e mostrar no console?
defineProps({
  data: Array,
  addCart: Function,
  filteredProducts: Array,
  valor: Boolean
})




</script>

<style scoped>
.hamburguers-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  
}
</style>