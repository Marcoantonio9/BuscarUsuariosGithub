<template>
  <div id="area-infos">
      <div id="area-foto">

      </div>
      <div id="area-nome">
          <h2>{{nomeUser}}</h2>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nomeUser: 'Nome do Usuario'
        }
    }
}
</script>

<style>
    #area-infos{
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
    }
    #area-foto{
        width: 180px;
        height: 180px;
        border: 1px solid orange;
        border-radius: 100px;
    }
</style>