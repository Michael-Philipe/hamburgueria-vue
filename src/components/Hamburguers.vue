<template>

    <section class="hamburguers-container">
        <!-- receber os hamburguers via vuex e listar os componentes(cards) de hamburguer -->
        
        <Hamburguer v-for="item in hamburguers" :key="item.id" :nomeProp="item.name" :precoProp="item.price" :categoriaProp="item.category" :burger="item" :stock="true"/>
       
        
    </section>

</template>

<script>
export default {
  name: 'HamburguersComponent',

}
</script>

<script setup>
import Hamburguer from '@/components/Hamburguer.vue'
import { onMounted, ref} from 'vue';


const hamburguers = ref(null)


const getDataFromApi = async ()=> {

  const req = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')

  const data = await req.json()
  
  
  hamburguers.value = data

  
  

}

onMounted(()=> {
  getDataFromApi()
  
})

//como pegar o valor do ref e mostrar no console?




</script>

<style scoped>
.hamburguers-container {
  display: flex;
  flex-wrap: wrap;
  
}
</style>