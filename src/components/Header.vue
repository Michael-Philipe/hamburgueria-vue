<template>
  <header class="header">
    <nav>
      <h1>Logo</h1>
      <div class="input-container">
        <label for="">Pesquisar burger</label>
        <input type="text">
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<script setup>

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
