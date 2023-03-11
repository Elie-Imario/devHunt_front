<script>
import { AccordionList, AccordionItem } from "vue3-rich-accordion"
export default {
    name:'advancedFiltre',
    data(){
        return{
            statusSelection: '',
            roleSelection:'',
            listStatus:['Etudiant L1PRO ', 'Etudiant L1SR', 'Etudiant L2GB', 'Etudiant L2IG',
            'Etudiant L3BG ', 'Etudiant L3IG', 'Etudiant L3SR', 'Etudiant MIGB', 'Etudiant M1IG',
            'Etudiant M1SR ', 'Etudiant M2IG', 'Etudiant M2SR', 'Etudiant M2GB'],
            listRole:['Utilisateur', 'Administrateur', 'Moderateur']
        }
    },
    components:{
        AccordionList,
        AccordionItem
    }
}
</script>
<template>
    <div>
        <div class="filtreAvance-bloc">
            <AccordionList class="filtreAvance-content">
                <AccordionItem default-opened>
                    <template #summary>
                        <span class="accordion-title">Filtrer par</span>
                    </template>
                    <template #icon><font-awesome-icon icon="fa-angle-up" class="dark"/></template>
                    <div class="content-body">
                        <form class="login100-form" id="searchUserForm" v-on:submit.prevent="onSubmitSearchForm">
                            <div class="field-row">
                                <div class="wrap-input100">
                                    <label for="input100-username">Nom</label>
                                    <input type="text" name="username" class="input100" id="input100-username" placeholder="johndoe">
                                </div>
                                <div class="wrap-input100">
                                    <label for="input100-email">Adresse email</label>
                                    <input type="email" name="email" class="input100" id="input100-email" placeholder="johndoe@gmail.com">
                                </div>
                                <div class="wrap-input100">
                                    <label for="input100-date">Date d'inscription</label>
                                    <input type="text" class="input100" id="input100-date" placeholder="04/03/2023">
                                </div>
                            </div>
                            <div class="field-row">
                                <div class="wrap-input100">
                                    <label for="input100-status">Status</label>
                                    <select v-model="statusSelection" class="form-select m-t-5" id="input100-status">
                                        <option v-for="(status, index) in listStatus" :key="index">{{status}}</option>
                                    </select>
                                </div>
                                <div class="wrap-input100">
                                    <label for="input100-role">Rôle</label>
                                    <select v-model="roleSelection" class="form-select m-t-5" id="input100-role">
                                        <option v-for="(role, index) in listRole" :key="index">{{role}}</option>
                                    </select>
                                </div>
                                <div class="wrap-input100">
                                    <label for="input100-reputation">Réputation</label>
                                    <input type="text" class="input100" id="input100-reputation" placeholder="Expert (50 étoiles)">
                                </div>
                            </div>
                        </form>
                    </div>
                </AccordionItem>
            </AccordionList>
        </div>
    </div>  
</template>
<style src="../../assets/css/advancedSearchStyle.css" scoped></style>
<style src="../../assets/css/loginstyle.css" scoped></style>