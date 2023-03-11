<script>
import LoginModal from '@/components/starter-component/LoginModal.vue'
import banner_Hero from '@/components/starter-component/BannerHero.vue'
import features_ from '@/components/starter-component/features.vue'
import about_ from '@/components/starter-component/about_.vue'
export default {
    components:{
        LoginModal,
        banner_Hero,
        features_,
        about_,
    }
}
</script>
<template>
    <div class="landing-container">
        <!-- Login modal -->
        <div class="login-">
            <LoginModal></LoginModal>
        </div>
        
        <!-- hero section -->
        <section class="banner-homepage" id="hero">
            <banner_Hero></banner_Hero>
        </section>

        <!-- features section -->
        <section class="features-section" id="features">
            <features_></features_>
        </section>

        <!-- About section -->
        <section class="about-section" id="about">
            <about_></about_>
        </section>
    </div>
</template>
<style></style>