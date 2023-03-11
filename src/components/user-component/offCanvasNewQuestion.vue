<script>
import UserService from "../../services/user.service";
export default {
    name:'offCanvasNewQuestion',
    props:['getallquestion'],
    data(){
        return{
            title:'',
            question:'',
            selection: '',
            listUE:['Algo', 'Français', 'Java', 'RO', 'IA', 'Anglais']
        }
    },
    methods:{
        onSubmitPostQuestionForm:function(){
            UserService.addNewQuestion(this.currentUser, this.title, this.question, this.selection).then(
            (response) => {
                console.log(response)
                this.getallquestion()
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
   <div class="post-form-question">
        <div class="post-form-title m-t-25">
            <h3>Poster une nouvelle question</h3>
        </div>
        <form class="PostQuestionForm">
            <div class="field-col m-t-50">
                <div class="wrap-input100">
                    <label for="input100-title">Titre</label>
                    <input type="text" v-model="title" class="input100" id="input100-title" placeholder="Ex: Is this statement, i see him last night can be understood as I saw him last night?">
                </div>
                <div class="wrap-input100">
                    <label for="input100-question">Question</label>
                    <textarea id="input100-question" v-model="question" class="input100" placeholder="Votre question ici..."></textarea>
                </div>
                <div class="wrap-input100">
                    <label for="input100-ue">Unités d'enseignement</label>
                    <select v-model="selection" class="form-select m-t-5" id="ueSelection">
                        <option v-for="(ue, index) in listUE" :key="index">{{ue}}</option>
                    </select>
                </div>
            </div>
            <div class="form-post-btn">
                <button @click.prevent="onSubmitPostQuestionForm">Publier</button>
            </div>
        </form>
    </div>
</template>
<style src="../../assets/css/newStyle.css" scoped></style>