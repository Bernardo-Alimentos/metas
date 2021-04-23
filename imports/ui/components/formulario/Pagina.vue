<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a @click.prevent class="nav-link btn btn-primary">{{mes.nome}} <span class="badge badge-light">{{mes.nmes}}</span></a>
                        </li>
                    </ul>
                    <form role="form">
                        <div class="form-group">
                            
                            <label for="qtdFardo">
                                Qtd. Fardo
                            </label>
                            <input type="number" v-model="input" class="form-control" id="qtdFardo" />
                        </div>
                        <div class="form-group">
                            
                            <label for="valor">
                                Valor
                            </label>
                            <input type="number" class="form-control" id="valor" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        'input': Object,
        'mes': Object

    }
    
}
</script>

<style scoped>

</style>