<script>
export default {
    name:'generalInfoView'
}
</script>
<template>
    <div class="general-info-container">
        <div class="general-info-limiter">
            <h1 class="title-lead m-b-38">Mon Compte</h1>
            <!--  -->
            <div class="userProfil-bloc">
                <div class="userProfil-content">
                    <div class="heading-content bg-grey">
                        <h2 class="content-title">
                            Profile utilisateurs
                        </h2>
                    </div>
                    <div class="content-body m-t-20">
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
                                    </div>
                                    <div class="field-col">
                                        <div class="wrap-input100">
                                            <label for="input100-email">Adresse email</label>
                                            <input type="email" name="email" class="input100" id="input100-email" placeholder="johndoe@gmail.com">
                                        </div>
                                        <div class="wrap-input100">
                                            <label for="input100-date">Date d'inscription</label>
                                            <input type="text" class="input100" id="input100-date" placeholder="04/03/2023">
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
            </div>
            <!--  -->

            <!--  -->
            <div class="security-bloc">
                <div class="security-content">
                    <div class="heading-content bg-grey">
                        <h2 class="content-title">
                            Mot de passe et Sécurité
                        </h2>
                    </div>
                    <div class="content-body m-t-15">
                        <div class="form-container">
                            <form id="SecurityForm">
                                <div class="info-basic-form">
                                    <div class="field-col">
                                        <div class="wrap-input100">
                                            <input type="password" name="currentpass" class="input100" id="input100-password" placeholder="Entrer votre mot de passe actuel">
                                        </div>
                                        <div class="wrap-input100">
                                            <input type="password" name="confirmpass" class="input100" id="input100-password" placeholder="Confirmer le nouveau mot de passe">
                                            <span class="btn-show-pass ico-right">
                                                <font-awesome-icon icon="fa-solid fa-eye"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field-col">
                                        <div class="wrap-input100">
                                            <input type="password" name="newPass" class="input100" id="input100-password" placeholder="Entrer le nouveau mot de passe">
                                            <span class="btn-show-pass ico-right">
                                                <font-awesome-icon icon="fa-solid fa-eye"/>
                                            </span>
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
            </div>
            <!--  -->

            <!--  -->
            <div class="danger-bloc">
                <div class="danger-content">
                    <div class="heading-content bg-grey">
                        <h2 class="content-title">
                            Supprimer mon compte
                        </h2>
                    </div>
                    <div class="content-body m-t-15">
                        <div class="form-container">
                            <form id="dangerForm">
                                <div class="info-basic-form">
                                    <div class="field-col">
                                        <div class="description">
                                            <p>Quand vous supprimer votre compte, vous perdez l’accès à toutes les services de Efanampy et 
                                                toutes vos données personnelles. Vous pouvez annuler l’action pour 14 jours.</p>
                                        </div>
                                        <div class="wrap-input100 m-t-10">
                                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                            <label for="agree-term" class="label-agree-term m-l-10"><span><span></span></span>Confirme que je veux supprimer mon compte</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottoun-group m-t-20">
                                    <button class="bottoun bottoun-info">
                                        En savoir plus
                                    </button>
                                    <button class="bottoun bottoun-danger">
                                        Supprimer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>
<style src="../../assets/css/userProfile.css" scoped></style>
<style src="../../assets/css/loginstyle.css" scoped></style>