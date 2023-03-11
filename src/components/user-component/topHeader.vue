<script>
export default {
    name: 'topHeader',
    props:['showForm']
}
</script>
<template>
    <div class="top-header-container">
        <div class="field-row">
            <form class="searcForm-container">            
                <div class="wrap-input100">
                    <input type="text" name="search" class="input100 bg-white" id="input100-search" placeholder="Veuillez entrer un mot clé à rechercher...">
                    <span class="btn-show-pass ico-right">
                        <font-awesome-icon icon="fa-search"/>
                    </span>
                </div>
            </form>
            <button class="bottoun bottoun-add" @click="showForm">Publier</button>
        </div>
    </div>
</template>
<style></style>