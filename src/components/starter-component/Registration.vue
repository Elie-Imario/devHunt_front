<script>
import axios from 'axios'
export default {
    name:'registrationForm',
    data(){
       return{
        username:'',
        email:'',
        password:'',
        confirmpassword:'',
        message:''
       } 
    }, 
    methods:{
        toPreviousSlide: function(){
            let current = document.querySelector('.form-limiter.nextSlide')
            if(current){
                current.classList.remove('nextSlide')
            }
        },
        onSumitRegistrationForm: function(){
            if(this.password === this.confirmpassword){
                axios.post("http://localhost:8080/api/auth/signup",
                {
                    username: this.username,
                    email:this.email,
                    password: this.password
                }).then(response=>{
                    if(response.status == 200){
                        this.username=''
                        this.email=''
                        this.password=''
                        this.confirmpassword=''
                        this.toPreviousSlide()
                    }
                })
            }
        }
    }
}
</script>
<template>
    <div>
        <form class="login100-form validate-form m-t-20" v-on:submit.prevent="onSumitRegistrationForm">
            <div class="wrap-input100">
                <label for="input100-email">Nom d'utilisateur</label>
                <input v-model="username" type="text" name="username" class="input100" id="input100-username" placeholder="johndoe">
            </div>
            <div class="wrap-input100">
                <label for="input100-email">Adresse email</label>
                <input v-model="email" type="email" name="email" class="input100" id="input100-email" placeholder="johndoe@gmail.com">
            </div>
            <div class="wrap-input100">
                <label for="input100-password">Mot de passe</label>
                <input v-model="password" type="password" class="input100" id="input100-password" placeholder="Votre de passe">
                <span class="btn-show-pass">
                    <font-awesome-icon icon="fa-solid fa-eye"/>
                </span>
            </div>
            <div class="wrap-input100">
                <label for="input100-password">Confirme mot de passe</label>
                <input v-model="confirmpassword" type="password" class="input100" id="input100-password" placeholder="Confirmer votre de passe">
                <span class="btn-show-pass">
                    <font-awesome-icon icon="fa-solid fa-eye"/>
                </span>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                    S'inscrire
                </button>
            </div>
        </form>
        <div class="text-center p-t-15">
            <span class="txt1">
                Vous possedez déjà un compte?
            </span>
            <button class="prev-slide txt2" @click="toPreviousSlide">
                Se connecter
            </button>
        </div>
    </div>
</template>
<style></style>