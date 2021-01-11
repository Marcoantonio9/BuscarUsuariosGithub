<template>
    <div id="infomacoes-user">
        <div id="area-infos">
            <div id="area-foto">
                <img :src="avatar">
            </div>
            <div id="area-nome">
                <h2>Nome: {{nome}}</h2>
                <h2 class="borda-final">User: {{nomeUser}}</h2>
                <small>Bio: {{bio}}</small>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    props: {
        nome: String,
        nomeUser: String,
        bio: String,
        avatar: String,
    },
    data(){
        return{

        }
    }
}
</script>

<style>
    #infomacoes-user{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
        border: 1px solid #8D86C9;
        border-radius: 100px;
    }
    #area-foto img{
        width: 100%;
        height: 100%;
        border-radius: 100px;
    }
    #area-nome{
        width: 55%;
        text-align: center;
    }
    h2{
        font-weight: 300;
        letter-spacing: 2px;
        padding: 5px;
    }
    .borda-final{
        border-bottom: 1px solid rgb(24, 24, 24);
        margin-bottom: 15px;
    }
    small{
        letter-spacing: 2px;
        color: rgb(24, 24, 24);
    }
</style>