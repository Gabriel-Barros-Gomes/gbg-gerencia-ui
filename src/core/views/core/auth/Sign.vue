<template>

    <div id="sign">

        <div id="sign-header">

            <figure class="image is-80x80">
                <img class="is-rounded" src="" alt="GBG - Gerencia-logo">
            </figure>

            <div>
                <label class="title">
                    Cadastre-se 
                </label>
                
            </div>

        </div>

        <div id="sign-canvas">
            <SignForm/>
        </div>

        <div id="sign-footer">
            <a href="">entenda mais sobre nosso software</a>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import SignForm from '../../../components/core/auth/sign/SignForm.vue'

export default defineComponent({
    components:{
        SignForm
    },
    setup() {
        
    },
})
</script>


<style scoped>
#sign-header{
    padding-bottom: 3rem;
}
#sign-footer{
    padding-top: 3rem;
}
</style>