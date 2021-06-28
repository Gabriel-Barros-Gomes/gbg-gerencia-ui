<template>
    <div id="route-register-form">
        <form>

            <div class="field">
                <div class="control">
                    <label class="label">Módulo</label>
                </div>
                <div class="control">
                    <select class="input is-rounded is-info">
                        <option value="">Selecione</option>
                        <option value="">Administração</option>
                        <option value="">Almoxarifado</option>
                        <option value="">Cadastros</option>
                        <option value="">Caixa</option>
                        <option value="">Configurações</option>
                        <option value="">Estoque</option>
                        <option value="">Help Desk</option>
                        <option value="">Recepção</option>
                    </select>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="label">Nome</label>
                </div>
                <div class="control">
                    <input type="text" class="input is-rounded is-info" placeholder="Nome">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="label">Apelido da Rota</label>
                </div>
                <div class="control">
                    <input type="text" class="input is-rounded is-info" placeholder="Apelido">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="label">Url da Rota</label>
                </div>
                <div class="control">
                    <input type="text" class="input is-rounded is-info " placeholder="Url">
                </div>
            </div>

            <div class="field">
                <div class="buttons">
                    <input type="button" class="button is-rounded is-primary is-outlined" value="Enviar">
                </div>
            </div>

        </form>
    </div>
</template>

<style scoped>
#route-register-form{
    text-align: center;
}
</style>