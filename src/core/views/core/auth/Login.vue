<template>

    <div id="login">

        <div id="login-header">

            <figure class="image is-80x80">
                <img class="is-rounded" src="" alt="GBG - Gerencia-logo">
            </figure>

            <div>
                <label class="title">Entrar</label>
            </div>

        </div>

        <div id="login-canvas">
            <LoginForm/>
        </div>

        <div id="login-footer">
            <a href="">esqueceu a senha?</a>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import LoginForm from '../../../components/core/auth/login/LoginForm.vue'

export default defineComponent({
    components:{
        LoginForm
    },
    setup() {
        
    },
})
</script>

<style scoped>
#login-header{
    padding-bottom: 3rem;
}
</style>
