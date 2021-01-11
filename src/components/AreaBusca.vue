<template>
    <div id="area-busca">
        <div v-if="buscaAtiva">
            <input type="text" id="buscar-usuario" placeholder="Digite o user" @keypress.enter="buscar">
            <button id="btn-buscar" @click="buscar">Buscar</button>          
        </div>
        <div id="infos" v-else-if="infosUsuario">
            <Infos :nome="nome" :nomeUser="nomeUser" :bio="bio" :avatar="avatar" :buscaAtiva="buscaAtiva" />
            <div id="area-btb-voltar">
                <button id="btn-voltar" @click="voltar">Voltar</button>   
            </div> 
        </div>
    </div>
</template>

<script>
import Infos from './AreaInfos.vue'
import axios from 'axios'
export default {
    components: {Infos},
    data(){
        return{
            buscaAtiva: true,
            infosUsuario: false,
            axios: axios,
            avatar: '',
            nome: '',
            nomeUser: '',
            bio: '',
        }
    },
    methods: {
        buscar(){
            let capturarUser = document.querySelector('#buscar-usuario').value

            if(capturarUser == ''){
                alert('Digite o campo corretamente!')
            }else{
            this.buscaAtiva = false 
            this.infosUsuario = true                
                const url = `https://api.github.com/users/${capturarUser}`
                this.axios.get(url).then((response) =>{
                    this.avatar = response.data.avatar_url
                    this.nome = response.data.name
                    this.nomeUser = response.data.login
                    this.bio = response.data.bio
                    this.dt = response.data.created_at
                })                
            }
        },
        voltar(){
            this.buscaAtiva = true,
            this.infosUsuario = false
        }
    }
}
</script>

<style>
    #area-busca{
        background-color: #2729326c;
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
        outline: none;
    }

    #btn-buscar, #btn-voltar{
        height: 42px;
        width: 100px;
        border: none;
        background-color: #8D86C9;
        color: #fff;
        letter-spacing: 2px;
        font-weight: bold;
    }
    #btn-buscar:hover, #btn-voltar:hover{
        background-color: #27293291;
        border: 1px solid #8d86c970;
    }
    #infos{
        width: 100%;

    }
    #area-btb-voltar{
        display: flex;
        justify-content: center;
    }
</style>