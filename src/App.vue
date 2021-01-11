<template>
  <div id="app">
    <!-- <AreaBusca /> -->
        <router-view></router-view>
  </div>
</template>

<script>
//import AreaBusca from './components/AreaBusca.vue'
export default {
  //components: {AreaBusca}

}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}
#app{
  width: 100%;
  height: 100vh;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>