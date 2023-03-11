<script>
export default {
    name:'userProfilView'
}
</script>
<template>
    <div class="user-profil-container">
        <div class="user-profil-limiter">
            <h1 class="title-lead m-b-38">Utilisateurs</h1>
            <!--  -->
            <div class="userProfil-bloc">
                <div class="heading-content">
                    <h2 class="content-title">
                        Profile utilisateurs
                    </h2>
                </div>
                <div class="content-body m-t-15">
                    <div class="user-info">
                        <div class="user-pic">
                            <img src="../../assets/img/4200_6_04.png" alt="user-pic">
                            <font-awesome-icon icon="fa-pen" class="ico white"/>
                        </div>
                        <div class="user-detail">
                            <span class="username">Photo de Profil</span> <br>
                            <span class="secondary">Ceci s’affichera sur votre profil</span>
                        </div>
                    </div>
                    <div class="form-container m-t-25">
                        <form id="userForm">
                            <div class="info-basic-form">
                                <div class="field-col">
                                    <div class="wrap-input100">
                                        <label for="input100-username">Nom</label>
                                        <input type="text" name="username" class="input100" id="input100-username" placeholder="johndoe">
                                    </div>
                                    <div class="wrap-input100">
                                        <label for="input100-genre">Genre</label>
                                        <input type="text" name="genre" class="input100" id="input100-genre" placeholder="Masculin">
                                    </div>
                                    <div class="wrap-input100">
                                        <label for="input100-status">Status</label>
                                        <input type="text" name="status" class="input100" id="input100-status" placeholder="Etudiants M1 GB">
                                    </div>
                                    <div class="wrap-input100">
                                        <label for="input100-fromdate">Membre depuis</label>
                                        <input type="text" class="input100" id="input100-fromdate" placeholder="04/03/2023">
                                    </div>
                                </div>
                                <div class="field-col">
                                    <div class="wrap-input100">
                                        <label for="input100-email">Adresse email</label>
                                        <input type="email" name="email" class="input100" id="input100-email" placeholder="johndoe@gmail.com">
                                    </div>
                                    <div class="wrap-input100">
                                        <label for="input100-datenais">Date de naissance</label>
                                        <input type="text" class="input100" id="input100-datenais" placeholder="04/03/1997">
                                    </div>
                                    <div class="wrap-input100">
                                        <label for="input100-reputation">Réputation</label>
                                        <input type="text" class="input100" id="input100-reputation" placeholder="Expert (50 étoiles)">
                                    </div>
                                </div>
                            </div>
                            <div class="bottoun-group m-t-10 m-b-5">
                                <button class="bottoun bottoun-add">
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>
<style src="../../assets/css/userProfile.css" scoped></style>
<style src="../../assets/css/loginstyle.css" scoped></style>