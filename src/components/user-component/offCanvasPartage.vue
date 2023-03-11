<script>
import UserService from "../../services/user.service";
export default {
    name:'offCanvasPartage',
    data(){
        return{
            title:'',
            content:'',
            keySelection: '',
            listKey:['Algo', 'Français', 'Java', 'RO', 'IA', 'Anglais']
        }
    },
    methods:{
        onSubmitPostShareForm:function(){
            UserService.Share(this.currentUser, this.title, this.content, this.keySelection).then(
            (response) => {
                console.log(response)
            },(error) => {
                console.log(error)    
                }
            );
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
   <div class="post-form-share">
        <div class="post-form-title m-t-25">
            <h3>Faire une partage de connaissance ou d’expérience</h3>
        </div>
        <form class="PostSharingForm">
            <div class="field-col m-t-50">
                <div class="wrap-input100">
                    <label for="input100-title">Titre</label>
                    <input type="text" v-model="title" class="input100" id="input100-title" placeholder="Ex: Is this statement, i see him last night can be understood as I saw him last night?">
                </div>
                <div class="wrap-input100">
                    <label for="input100-contenu">Contenu</label>
                    <textarea v-model="content" id="input100-contenu" class="input100" placeholder="Votre contenu ici..."></textarea>
                </div>
                <div class="wrap-input100">
                    <label for="input100-ue">Unités d'enseignement</label>
                    <select v-model="keySelection" class="form-select m-t-5" id="ueSelection">
                        <option v-for="(key, index) in listKey" :key="index">{{key}}</option>
                    </select>
                </div>
                <div class="wrap-input100">
                    <label for="input100-file">Pièce jointe</label>
                    <input type="text" class="input100" id="input100-file" placeholder="Ajouter votre capture ici s’il y en a">
                </div>
            </div>
            <div class="form-post-btn">
                <button @click.prevent="onSubmitPostShareForm">Publier</button>
            </div>
        </form>
    </div>
</template>
<style src="../../assets/css/newStyle.css" scoped></style>