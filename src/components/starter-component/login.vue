<script>
import axios from 'axios'
export default{
    name:'loginForm',
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        toNextSlide: function(){
            let current = document.querySelector('.form-limiter')
            current.classList.add('nextSlide')
        },
        onSubmitLoginForm: function(){
            axios.post("http://localhost:8080/api/auth/signin", 
            {
                username: this.username,
                password: this.password
            }).then(response=>{
                if (response.data.accessToken) {
                   localStorage.setItem('user', JSON.stringify(response.data))
                   this.$store.dispatch('login', response.data)
                   this.$router.push('/dashboard/home')
                }
            })
        }
    }
}
</script>

<template>
    <div class="p-t-55">
        <form class="login100-form" v-on:submit.prevent="onSubmitLoginForm">
            <div class="wrap-input100">
                <label for="input100-email">Nom d'utilisateur</label>
                <input v-model="username" type="text" name="email" class="input100" id="input100-email" placeholder="johndoe">
            </div>
            <div class="wrap-input100">
                <label for="input100-password">Mot de passe</label>
                <input v-model="password" type="password" class="input100" id="input100-password" placeholder="Votre de passe">
                <span class="btn-show-pass">
                    <font-awesome-icon icon="fa-solid fa-eye"/>
                </span>
            </div>

            <div class="container-login100-form-btn m-t-20">
                <button class="login100-form-btn">
                    Se connecter
                </button>
            </div>
        </form>
        <div class="text-center p-t-55">
            <span class="txt1">
                Vous n'avez pas encore de compte?
            </span>
            <button class="next-slide txt2" @click="toNextSlide">
                S'incrire
            </button>
        </div>
    </div>
</template>

<style></style>