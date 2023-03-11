<script>
import stats from '@/components/admin-dashboard-component/stats.vue'
export default {
    name: "dataView",
    components:{
        stats,
    } 
}
</script>

<template>
    <div class="data-container">
        <div class="stat-limiter">
            <h1 class="title-lead m-b-38">Données</h1>
            <div class="stat-section">
                <stats></stats>
            </div>  
        </div>
    </div>
</template>
<style></style>