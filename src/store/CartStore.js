import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    //state
    state(){
        return {
            data: [],
            
        }
    },

    actions: {
        increment(item){
        this.data.push(item)
        console.log('data',this.data)
        
        },
        decrement(item){
            const dataFiltered = this.data.filter((hamburguer) => hamburguer.idCompra !== item.idCompra)
            this.data = dataFiltered
        }
    },
    getters: {
        showData(){
            
            return this.data
        }
    }
})