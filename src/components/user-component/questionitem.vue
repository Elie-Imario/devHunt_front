<script>
export default {
    name:'question_item',
    props:['title','createAt', 'user'],
    methods:{
        toUserProfil:function(){
            this.$router.push('/dashboard/userProfil')
        }
    }
}
</script>
<template>
    <div class="header-content">
        <div class="user-pic" @click="toUserProfil">
            <img src="../../assets/img/4200_6_04.png" alt="user-pic">
        </div>
        <div class="question-info">
            <div class="detail-post">
                <span class="username" v-if="user">{{user.username}}</span>
                <span class="datepost m-l-80">Postée le <span class="sky-blue">{{createAt}}</span></span>
            </div>
            <div class="title-lead m-t-15">
                <span class="post-title">{{title}}</span>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/questions.css" scoped></style>