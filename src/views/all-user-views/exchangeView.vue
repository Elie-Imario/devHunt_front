<script>
import question_item from '@/components/user-component/questionitem.vue'
import subject_ from '@/components/user-component/subject.vue'
import responseitem from '@/components/user-component/responseitem.vue'
import replyForm from '@/components/user-component/replyForm.vue'
import UserService from "../../services/user.service"
export default {
    name: "exchangeView",
    components:{
        question_item,
        subject_,
        responseitem,
        replyForm
    },
    data(){
        return{
            idPost: this.$route.params.id,
            datas:{},
            data:{},
            datasFiltered:{},
        }
    },
    mounted(){
        UserService.getQuestion(this.idPost).then(
            (response) => {
                this.data=response.data.data
            },
            (error) => {
                console.log(error)
            }
        ),
        this.getAllResponse()
    },
    methods:{
        getAllResponse:function(){
            UserService.getAllResponse().then(
                (response) => {
                    this.datas = response.data.data
                    this.datasFiltered = this.datas.filter((item)=>{
                        return(item.question.id == parseInt(this.idPost))
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
        }
    }
}
</script>

<template>
    <div class="exchangeView-container">
        <div class="exchangeView-limiter">
            <h1 class="title-lead m-b-38">Accueil</h1>
            <div class="question-item m-b-50">
                <div class="dropdown">
                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <font-awesome-icon icon="fa-ellipsis-vertical" />
                    </button>
                </div>
                <question_item :user="data.user" :createAt="data.createdAt" :title="data.titleQuestion"/>
                <subject_ :subject="data.contentQuestion"></subject_>
                <div class="response-to m-t-35">
                    <button class="btn btn-response">
                        <span><font-awesome-icon icon="fa-solid fa-envelope" class="fa m-r-5"/>{{ datasFiltered.length }} Réponses</span>
                    </button>
                </div>
            </div>

            <!-- response -->
            <h1 class="title-lead m-b-38">Réponses</h1>
            <responseitem :datasFiltered="datasFiltered"></responseitem>
            <div class="reply-section m-t-35">
                <replyForm :questionId="data.id"></replyForm>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/dashboardHomeStyle.css"></style>