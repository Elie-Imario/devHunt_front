<script>
export default {
    name: 'tag_',
    props:['UE']
}
</script>
<template>
    <div>
        <span class="badge">UE: {{UE}}</span>
    </div>
</template>
<style scoped>
    .badge{
        background: #FFABD3;
        border: 0.6px solid #FFFFFF;
        border-radius: 8px;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        padding: .5rem .7rem;
    }   
</style>