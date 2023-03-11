<script>
export default {
    name: 'subject_',
    components:{
    },
    props:['subject', 'image'],
    methods:{
        respond:function(){
            this.$router.push('/user/addNewResponse')
        }
    }
}
</script>
<template>
    <div class="subject-container m-t-20">
        <div class="text">
            <p>
                {{subject}}
            </p>
            <!-- if image -->
            <div class="img-container m-t-15" v-if="image">
                <img src="../../assets/img/pic.png" alt="img">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .subject-container{
        width: 90%;
        margin-left:8%;
        margin-right:8%;
    }   
    .text p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
    }
    .img-container{
        height: 630px;
    }
    .img-container img{
        width: 100%;
        height: 100%;
    }
</style>