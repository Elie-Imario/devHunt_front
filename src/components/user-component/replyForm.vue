<script>
import UserService from "../../services/user.service";
export default {
    name:'replyForm',
    props:['questionId'],
    data(){
        return{
            content: ''
        }
    },
    methods:{
        onSumbitreplyForm: function(_questionId){
            UserService.addResponse(this.currentUser, _questionId, this.content).then(
            (response) => {
                console.log(response)
                this.content=''
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
    <div class="reply-container">
        <form @submit.prevent="onSumbitreplyForm(questionId)">
            <div class="field-row">            
                <div class="wrap-input100">
                    <input type="text" v-model="content" class="input100 bg-white" id="input100-replyto" placeholder="Ecrire votre réponse ici...">
                </div>
                <button class="bottoun-send">Repondre</button>
            </div>
        </form>
    </div>
</template>
<style></style>