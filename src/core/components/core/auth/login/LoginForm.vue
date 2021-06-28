<template>
    <div id="login-form">
        <div>
            <form>

                <div class="field">
                    <div class="control">
                        <label class="label">Email</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="email" placeholder="Email">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="label">Senha</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="password" placeholder="Senha">
                    </div>
                </div>
                
                <div class="field">
                    <div class="control">
                        <label class="label">Registro Específico</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="text" placeholder="R.E">
                    </div>
                </div>
                
                <div class="field">
                    <div class="buttons">
                        <input class="button is-rounded is-primary is-outlined" type="button" value="Enviar">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
#login-form{
    text-align: center;
}
</style>