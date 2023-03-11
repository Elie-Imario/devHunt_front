<script>
export default {
    name: 'stats_',
}
</script>

<template>
    <div class="stat-container">
        <div class="stats-cards-box">
            <!-- #1 -->
            <div class="stat-card">
                <div class="stats-ico one"><span class="ico-square one"><font-awesome-icon icon="fa-solid fa-user" class="blue"/></span></div>
                <div class="stats-description">
                    <span>Questions totales</span>
                    <span class="value">3</span>
                </div>
            </div>

            <!-- #2 -->
            <div class="stat-card">
                <div class="stats-ico two"><span class="ico-circle"><font-awesome-icon icon="fa-solid fa-user" class="sky-blue"/></span></div>
                <div class="stats-description">
                    <span>Questions résolues</span>
                    <span class="value">3</span>
                </div>
            </div>

            <!-- #3 -->
            <div class="stat-card">
                <div class="stats-ico three"><span class="ico-circle"><font-awesome-icon icon="fa-solid fa-pie-chart" class="red"/></span></div>
                <div class="stats-description">
                    <span>Storage</span>
                    <span class="value">128/500 GB</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/css/stats.css"></style>