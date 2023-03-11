<script>
export default {
    name: 'dangerAlert',
}
</script>

<template>
    <div class="alert alert-danger">
        <div class="alert-danger-content">
            <font-awesome-icon icon="fa-times-circle" class="fa red-1 m-r-5"/>
            <span class="alertmsg red-1">
                Erreurs!
            </span>
        </div>
    </div>
</template>

<style src="../../assets/css/alertStyle.css"></style>