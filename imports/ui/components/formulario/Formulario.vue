<template>
    <div>
        <form @submit.prevent>
            <h1>Cadastro de metas</h1>
            <div class="form-group row">
                <label for="representantes" class="col-sm-2 col-form-label">Representante:</label>
                <div class="col-sm-10">
                    <select class="form-control" id="representantes" aria-label="Selecione um representante" v-model="selected" required>
                        <option value="" disabled selected>Selecione o representante</option>
                        <option v-for="rep in meuJson" v-bind:key="rep.codRepresentante" v-bind:value="rep.codRepresentante">{{rep.nome}}</option>
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label for="ano" class="col-sm-2 col-form-label">Digite o ano:</label>
                <div class="col-sm-10">
                    <input  @dblclick="place" type="number" id="ano" v-model="ano" placeholder="2021" required>
                </div>
            </div>

            <div class="container-fluid">
                <h1 id="quantidades" class="display-4">{{calendario[pagina-1].nome}}</h1>
                <div v-for="mascara in masc2" v-bind:key="mascara.id" class="row">
                    <div class="col">
                        <p class="lead">{{mascara.nome}}</p>
                    </div>
                    <div class="col">
                        <label for="qtdFardo">
                            Qtd. Fardo
                        </label>
                        <input  type="number" v-model="qtdFardo[mascara.id]" class="form-control" id="qtdFardo" />
                    </div>
                    <div class="col">
                        <label for="valor">
                            Valor
                        </label>
                        <input type="number" v-model="qtdMoney[mascara.id]" class="form-control" id="valor" @keydown.enter="next" />
                    </div>
                </div>
            </div>

            <button v-if="pagina != 12" @submit.prevent class="btn btn-primary" @click="nextHandler">Próximo</button>
            <button v-if="pagina == 12" type="submit" class="btn btn-primary" @click="enviar">Enviar</button>
            <button @click="reset" class="btn btn-secundary">Reset</button>
        </form>
    </div>
</template>

<script>
import json from '../../../../representantes.json'
import mascara2 from '../../../../masc2.json'
import cal from '../../../../calendario.json'


var mesArray= new Array()

function Meta(codRepresentante, ano, meses){
    this.codRepresentante= codRepresentante
    this.ano= ano
    this.meses= meses
}
function Mes(numMes, masc){
    this.numMes= numMes
    this.masc= masc
}
Meteor.subscribe('metas')

export default {
    data(){
        return{
            input: {},
            selected: "",
            pagina: 1,
            meuJson: json,
            masc2: mascara2,
            ano: "",
            qtdFardo: {},
            qtdMoney: {},
            calendario: cal
        }
    },
    methods:{
        funcao(){
            console.log("nada")
        },
        place(){
            this.ano=2021
        },
        next(){
            var mascArray= new Array;
            for (var i=0; i < this.masc2.length; i++){
                mascArray.push({
                    nome: this.masc2[i].nome,
                    qtdFardo: this.qtdFardo[i] || 0,
                    valor: this.qtdMoney[i] || 0
                })
            }
            var mes = new Mes(this.pagina, mascArray)
            mesArray.push(mes)
            console.log(mesArray)

            this.qtdFardo={}
            this.qtdMoney={}
            
        },
        incrementa(){
            this.pagina++
        },
        enviar(){
            this.next()
            var metas= new Meta(this.selected, this.ano, mesArray)

            // manda a meta para o banco de dados
            Meteor.call('criaMeta', metas)
            alert('Meta cadastrada com sucesso!')
            
            metas= {}
            reset()
        },
        nextHandler(){
            this.next()
            this.incrementa()
            document.getElementById("quantidades").scrollIntoView()
        },
        reset(){
            this.pagina= 1
            this.selected= ""
            this.ano= ""
            qtdFardo= {}
            qtdMoney= {}
            document.getElementById("quantidades").scrollIntoView()
        }
    },
    meteor: {
        
    }    
}
</script>

<style scoped>
form{

    margin-top: 1em;
}
h1{
    text-align: center;
    margin-bottom: 1em;
}
button{
    margin: 1em;
}
span{
    margin-top: 1em;
}
.mrg{
    margin-bottom: 1em;
    padding-bottom: 10px;
}
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}
.tab-button.active {
        background: #e0e0e0;
}
.col{
    margin-bottom: 1em;

}
</style>