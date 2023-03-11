<script>
import loginForm from './login.vue'
import registrationForm from './Registration.vue'
import appLogo from '../Logo.vue'
export default {
    name:'LoginModal',
    components:{
        appLogo,
        loginForm,
        registrationForm,
    },
    methods:{
        closeModal:function(){
            let modal = document.querySelector(".modal-limiter.show")
            if(modal){
                modal.classList.remove("show")
            }
        }
    }
}
</script>

<template>
    <div class="modal-limiter">
        <div class="overlay"></div>
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login-header p-b-25">
                    <button class="closepopup" @click="closeModal"><font-awesome-icon icon="fa-solid fa-times"/></button>
                    <div class="login100-form-title-img">
                        <appLogo/>
                    </div>
                    <span class="login100-form-title m-t-10">
                        Bienvenue
                    </span>
                </div>
                <div class="forms-container">
                    <div class="form-limiter">
                        <div class="loginForm-container">
                            <loginForm></loginForm>
                        </div>
                        <div class="registrationForm-container">
                            <registrationForm></registrationForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/css/loginstyle.css"></style>