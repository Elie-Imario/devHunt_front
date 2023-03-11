<script>
export default {
    name:'response_item',
    props:['datasFiltered']
    
}
</script>
<template>
    <div class="response-content m-b-35" v-for="(data, index) in datasFiltered" :key="index">
        <div class="header-content">
            <div class="detail-post">
                <span class="datepost">Postée le <span class="sky-blue">{{ data.createdAt }}</span></span>
                <span class="username m-l-45">John Doe</span>
            </div>
            <div class="user-pic">
                <img src="../../assets/img/4200_6_04.png" alt="user-pic">
            </div>
        </div>
        
        <div class="response-text m-t-20 m-r-25">
            <p>{{ data.contentResponse }}</p>
        </div>
        <div class="rating-to m-t-35">
            <button class="btn btn-rating" @click="rate">
                <span><font-awesome-icon icon="fa-regular fa-star" class="green m-r-5"/>0</span>
            </button>
        </div>
    </div>
</template>
<style src="../../assets/css/responseitem.css" scoped></style>