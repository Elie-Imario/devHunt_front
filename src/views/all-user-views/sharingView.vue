<script>
import offCanvasPartage from '@/components/user-component/offCanvasPartage.vue'
import question_item from '@/components/user-component/questionitem.vue'
import subject_ from '@/components/user-component/subject.vue'
import topHeader from '@/components/user-component/topHeader.vue'
import UserService from "../../services/user.service"
export default {
    name: "sharingView",
    components:{
        offCanvasPartage,
        question_item,
        subject_,
        topHeader,
    },
    watch:{
        datas: function(){
            this.getALLquestions()
        }
    },  
    data(){
        return{
            datas:{}
        }
    },
    methods:{
        showPostShareForm: function(){
            let _form = document.querySelector('.offcanvas-section')
            let _overlay = document.querySelector('.overlay')
            
            _form.classList.add('show')
            _overlay.classList.add('appear')
        },
        closePostShareForm:function(){
            let _form = document.querySelector(".offcanvas-section.show")
            let _overlay = document.querySelector('.overlay.appear')
            if(_form && _overlay){
                _form.classList.remove("show")
                _overlay.classList.remove("appear")
            }
        },
        getALLShares:function(){
            UserService.getAllSharing().then(
            (response) => {
                console.log(response.data.data)
                this.datas = response.data.data
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
    <div class="bloc-sharing-page">
        <div class="overlay"></div>
        <div class="offcanvas-section">
            <button class="closepopup" @click.prevent="closePostShareForm"><font-awesome-icon icon="fa-solid fa-times"/></button>
            <offCanvasPartage></offCanvasPartage>
        </div>
        <div class="sharing-container">
            <div class="sharing-limiter">
                <div class="field-row m-b-38">
                    <h1 class="title-lead">Partage</h1>
                    <topHeader :showForm="showPostShareForm"></topHeader>
                </div>

                <div class="sharing-item m-b-50">
                    <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <font-awesome-icon icon="fa-ellipsis-vertical" />
                        </button>
                    </div>
                    <question_item :createAt="datas.createdAt" :title="datas.titre"/>
                    <subject_ :subject="datas.content" :image="true"></subject_>
                    <div class="rating m-t-35">
                        <button class="btn btn-rating" @click="rate">
                            <span><font-awesome-icon icon="fa-regular fa-star" class="green m-r-5"/>7</span>
                        </button>
                    </div>
                </div>

                <div class="question-item">
                    <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <font-awesome-icon icon="fa-ellipsis-vertical" />
                        </button>
                    </div>
                    <question_item :createAt="datas.createdAt" :title="datas.titre"/>
                    <subject_ :subject="datas.content"></subject_>
                    <div class="rating m-t-35">
                        <button class="btn btn-rating" @click="rate">
                            <span><font-awesome-icon icon="fa-regular fa-star" class="green m-r-5"/>7</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/dashboardHomeStyle.css"></style>