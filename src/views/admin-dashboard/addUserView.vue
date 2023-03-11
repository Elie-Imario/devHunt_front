<script>
import { AccordionList, AccordionItem } from "vue3-rich-accordion"
export default {
    name: "addNewUser",
    components:{
        AccordionList,
        AccordionItem
    }
}
</script>

<template>
    <div class="add-user-container">
        <div class="add-user-limiter">
            <h1 class="title-lead m-b-38">Utilisateurs</h1>
            <!--  -->
            <AccordionList class="form-container">
                <AccordionItem default-opened class="test">
                    <template #summary>
                        <span class="accordion-title">Inviter un futur modérateur (ancien étudiant de l’école ou professeurs ou aîné)</span>
                    </template>
                    <template #icon><font-awesome-icon icon="fa-angle-up" class="dark"/></template>
                    <div class="content-body">
                        <form>
                            <div class="wrap-input100">
                                <label for="input100-email">Adresse email</label>
                                <div class="field-row m-t-5">
                                    <input type="email" name="email" class="input100" id="input100-email" placeholder="johndoe@gmail.com">
                                    <button class="bottoun bottoun-add">Inviter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </AccordionItem>
            </AccordionList>
            <!--  -->

            <AccordionList class="form-container m-t-45">
                <AccordionItem default-opened>
                    <template #summary>
                        <span class="accordion-title">Inviter des étudiants</span>
                    </template>
                    <template #icon><font-awesome-icon icon="fa-angle-up" class="dark"/></template>
                    <div class="content-body">
                        <form>
                            <div class="field-row">
                                <div class="wrap-input100">
                                    <label for="input100-level">Niveau</label>
                                    <input type="text" name="level" class="input100 m-t-10" id="input100-level" placeholder="Quatrième année">
                                </div>
                                <div class="wrap-input100">
                                    <label for="input100-parcours">Parcours</label>
                                    <input type="text" name="parcours" class="input100 m-t-10" id="input100-parcours" placeholder="Administrations des systèmes et rés...">
                                </div>
                                <div class="wrap-input100">
                                    <label for="input100-file">Liste (fichier excel)</label>
                                    <input type="text" class="input100 m-t-10" id="input100-file" placeholder="Joindre la liste des étudiants ici">
                                </div>
                            </div>
                            <div class="bottoun-group m-t-15 m-b-15">
                                <button class="bottoun bottoun-add">
                                    Inviter
                                </button>
                            </div>
                        </form>
                    </div>
                </AccordionItem>
            </AccordionList>
        </div>
    </div>
</template>
<style src="../../assets/css/addUserStyle.css" scoped></style>
<style src="../../assets/css/loginstyle.css" scoped></style>