<template>
  <div id="area-busca">
        <div v-show="buscaAtiva">
            <input type="text" id="buscar-usuario" placeholder="Digite o user" @keypress.enter="buscar">
            <button id="btn-buscar" @click="buscar">Buscar</button>          
        </div>
        <div id="infos" v-show="infosUsuario">
            <Infos />
        </div>
  </div>
</template>

<script>
import Infos from './AreaInfos.vue'
export default {
    components: {Infos},
    data(){
        return{
            buscaAtiva: true,
            infosUsuario: false
        }
    },
    methods: {
        buscar(){
            let capturarUser = document.querySelector('#buscar-usuario').value 
            alert(`Usuário digitado: ${capturarUser}`)
            this.infosUsuario = true
        }
    }
}
</script>

<style>
    #area-busca{
        background-color: #27293291;
        border-radius: 20px;
        width: 50%;
        height: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #buscar-usuario{
        border: none;
        height: 40px;
        width: 270px;
        padding: 10px;
        border-radius: 10px 0px 0px 10px;
    }

    #btn-buscar{
        height: 42px;
        width: 100px;
        border: none;
        background-color: #8D86C9;
        color: #fff;
        letter-spacing: 2px;
        font-weight: bold;
    }
    #btn-buscar:hover{
        background-color: #27293291;
        border: 1px solid #8D86C9;
    }
    #infos{
        width: 100%;
    }
</style>