<script>
import appLogo from '../../components/Logo.vue'
export default {
    name:'footer_',
    components:{
        appLogo
    }
}
</script>
<template>
    <footer>
        <div class="limiter">
           <div class="footer-parts">
                <div class="part logo-container">
                    <appLogo/>
                </div>
                <div class="part info-container">
                    <div class="made-with">
                        <p>
                            Developed with <span><font-awesome-icon icon="fa-regular fa-heart" class="pink"/></span> by Tetsuya Group
                        </p>
                    </div>
                    <div class="part-social-media">
                        <span>Suivez-nous sur:</span>
                        <div class="social-media-items">        
                            <span><font-awesome-icon icon="fa-brands fa-twitter" class="ico-social-media"/></span>
                            <span><font-awesome-icon icon="fa-brands fa-linkedin-in" class="ico-social-media"/></span>
                            <span><font-awesome-icon icon="fa-brands fa-instagram" class="ico-social-media"/></span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </footer>
</template>

<style src="../../assets/css/Footer.css" scoped></style>