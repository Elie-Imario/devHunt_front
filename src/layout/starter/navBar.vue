<script>
import appLogo from '../../components/../components/Logo.vue'
export default {
    name:'navBar_Header',
    components:{
        appLogo
    },
    mounted(){
        this.stickyNavBar()
    },

    methods:{
       stickyNavBar(){
            window.addEventListener("scroll", function(){
                if(window.scrollY>50) document.querySelector(".navbar").classList.add("sticky")
                else document.querySelector(".navbar").classList.remove("sticky")
            })
       },
       showModal: function(){
            let modal = document.querySelector(".modal-limiter")
            modal.classList.add("show")
        }    

    }
}
</script>
<template>
    <div class="top-header">
        <nav class="navbar navbar-expand">
            <div class="navbar-nav-container">
                <div class="navbar-brand">
                    <appLogo/>
                </div>
                <!-- <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav">
                        <li class="nav-item home active">
                            <a class="nav-link" href="#hero">Comment ça marche?</a>
                        </li>
                        <li class="nav-item about">
                            <a class="nav-link" href="#features">Features</a>
                        </li>
                        <li class="nav-item menu">
                            <a class="nav-link" href="#about">A propos</a>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link login-link" @click="showModal">Se connecter</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style src="../../assets/css/header.css" scoped></style>