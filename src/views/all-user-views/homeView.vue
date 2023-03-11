<script>
import offCanvasNewQuestion from '@/components/user-component/offCanvasNewQuestion.vue'
import question_item from '@/components/user-component/questionitem.vue'
import subject_ from '@/components/user-component/subject.vue'
import topHeader from '@/components/user-component/topHeader.vue'
import tag_ from '@/components/user-component/tag.vue'
import UserService from "../../services/user.service"
import moment from 'moment'

export default {
    name: "homeView",
    components:{
        offCanvasNewQuestion,
        question_item,
        subject_,
        topHeader,
        tag_,
    },
    data(){
        return{
            datas:{}
        }
    },
    watch:{
        datas: function(){
            this.getALLquestions()
        }
    },  
    mounted(){
        this.getALLquestions()
    },
    methods:{
        showPostQuestionForm: function(){
            let _form = document.querySelector('.offcanvas-section')
            let _overlay = document.querySelector('.overlay')
            
            _form.classList.add('show')
            _overlay.classList.add('appear')
        },
        closePostQuestionForm:function(){
            let _form = document.querySelector(".offcanvas-section.show")
            let _overlay = document.querySelector('.overlay.appear')
            if(_form && _overlay){
                _form.classList.remove("show")
                _overlay.classList.remove("appear")
            }
        },
        getALLquestions:function(){
            UserService.getAllquestions().then(
            (response) => {
                console.log(response.data.data)
                this.datas = response.data.data
            },
            (error) => {
                console.log(error)
            }
        )
        },
        gotoExchangeView:function(id){
            this.$router.push(`/dashboard/views/question/${id}`)
        },
        formatDate:function(date){
            return moment(String(date)).format('MM/DD/YYYY hh:mm')
        }
    },
    computed:{
        
    }

}
</script>

<template>
    <div class="bloc-home-page">
        <div class="overlay"></div>
        <div class="offcanvas-section">
            <button class="closepopup" @click.prevent="closePostQuestionForm"><font-awesome-icon icon="fa-solid fa-times"/></button>
            <offCanvasNewQuestion :getallquestion="getALLquestions"></offCanvasNewQuestion>
        </div>
        <div class="home-container">
            <div class="home-limiter">
                <div class="field-row m-b-38">
                    <h1 class="title-lead">Acceuil</h1>
                    <topHeader :showForm="showPostQuestionForm"></topHeader>
                </div>

                <div class="question-item m-b-50" v-for="(data, index) in datas" :key="index">
                    <question_item :user="data.user" :createAt="formatDate(data.createdAt)" :title="data.titleQuestion"/>
                    <subject_ :subject="data.contentQuestion"></subject_>
                    <tag_ :UE="data.ue" class="m-t-50"></tag_>
                    <div class="response-to m-t-35">
                        <button class="btn btn-response" @click="respond">
                            <span><font-awesome-icon icon="fa-solid fa-envelope" class="fa m-r-5"/>{{ data.responses.length }} Réponses</span>
                        </button>
                        <button class="consult-item m-r-25" @click="gotoExchangeView(data.id)">
                            <span>Consulter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/dashboardHomeStyle.css"></style>