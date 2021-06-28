<template>
    <div id="route Register" class="columns">
        <div id="route-register-header">
            <div>
                <label class="title">
                    Cadastro de rotas
                </label>
            </div>
            <RouteRegisterForm/>
        </div>

        <div id="route-register-canvas" class="column">
            <div>
                <table class="table">
                      <thead>
                            <tr>
                            <th><abbr >Nome</abbr></th>
                            <th><abbr >Apelido</abbr></th>
                            <th><abbr >Url</abbr></th>
                            <th><abbr >Modulo</abbr></th>
                            <th><abbr >Editar</abbr></th>
                            <th><abbr >Deletar</abbr></th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th><abbr >Nome</abbr></th>
                            <th><abbr >Apelido</abbr></th>
                            <th><abbr >Url</abbr></th>
                            <th><abbr >Modulo</abbr></th>
                            <th><abbr >Editar</abbr></th>
                            <th><abbr >Deletar</abbr></th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>teste</td>
                                <td>teste</td>
                                <td><a href="">/teste</a></td>
                                <td>teste</td>
                                <td><input type="button" value="Editar" class="button is-small is-warning"></td>
                                <td><input type="button" value="Deletar" class="button is-small is-danger"></td>

                            </tr>
                        </tbody>

                </table>
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import RouteRegisterForm from '../../../../components/core/dashboard/route-register/RouteRegisterForm.vue'

export default defineComponent({
    components:{
        RouteRegisterForm
    },
    setup() {
        
    },
})
</script>
