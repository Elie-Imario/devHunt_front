<script>
import appLogo from '../../components/Logo.vue'
export default {
    components:{
        appLogo,
    },
    methods: {
        logOut() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        },
        toUserProfile(){
            this.$router.push('/dashboard/userProfil')
        }
    },
    computed:{
        currentUser(){
            return this.$store.state.user
        }
    }
}
</script>

<template>
    <div class="global-sidebar">
        <div class="navbar-brand">
            <appLogo/>
        </div>
        <nav class="sidebar">
            <div class="sidebar-nav-container">
                <ul class="nav nav-sidebar" id="accordion" role="tablist">
                    <li class="nav-item current">
                        <router-link :to="{name: 'dashboardhomelink'}"><font-awesome-icon icon="fa-home" class="m-r-5"/> Acceuil</router-link>    
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'datalink'}"><font-awesome-icon icon="fa-chart-simple" class="m-r-5"/> Données</router-link>    
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'sharinglink'}"><font-awesome-icon icon="fa-thumbtack"  class="m-r-10"/> Thématiques partagées</router-link>    
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'userlistlink'}"><font-awesome-icon icon="fa-users" class="m-r-5"/>Utilisateurs</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="parent collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false">
                            <font-awesome-icon icon="fa-image-portrait" class="m-r-5"/>
                            Mon compte                          
                            <font-awesome-icon icon="fa-angle-up" class="fa"/>
                        </a>
                        <ul class="child collapse m-l-30" id="collapse-3">
                            <li class="nav-item-list">
                                <router-link :to="{name: 'generalInfolink'}"><span><i class="fa fa-user-plus"></i></span> Paramètres</router-link>
                            </li>
                        </ul>
                    </li>
                    <div class="nav-item bottom-section m-b-15">
                        <li class="nav-item m-t-5">
                            <div class="m-l-15">
                                <button class="btn btn-logout" @click.prevent="logOut">
                                    <font-awesome-icon icon="sign-out-alt" /> Se deconnecter
                                </button>
                            </div>
                        </li>
                        <li class="nav-item m-t-10">
                            <div class="m-l-15">
                                <button class="btn btn-profile" @click="toUserProfile">
                                    <div class="profile-pic">
                                        <img src="../../assets/img/4200_6_04.png">
                                    </div>
                                    {{ currentUser.username }}
                                </button>
                            </div>   
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style src="../../assets/css/sideBar.css" scoped></style>