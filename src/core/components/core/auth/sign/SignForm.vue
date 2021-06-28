<template>
    <div id="sign-form">
        <div>
            <form>

                <div class="field">
                    <div class="control">
                        <label class="label">Nome Completo</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="email" placeholder="Email">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="label">Cadastro de Pessoa Física</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="text" placeholder="CPF">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="label">Cadastro de Pessoa Júridica Filiada</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="text" placeholder="CNPJ Filiado">
                    </div>
                </div>

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
                        <label class="label">Repetir Senha</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="password" placeholder="Senha">
                    </div>
                </div>
                
                <div class="field">
                    <div class="control">
                        <label class="label">Informe o Registro Específico Recebido</label>
                    </div>

                    <div class="control">
                        <input class="input is-rounded is-info" type="text" placeholder="R.E">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <div>
                            <input class="checkbox" type="checkbox">Declaro que aceito e li os <a href="">termos e licenças</a>
                        </div>
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
#sign-form{
    text-align: center;
}
</style>