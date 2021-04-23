import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Metas from '../collections/Metas'

Meteor.methods({
    'criaMeta'(meta){
        check(meta.codRepresentante, Number)

        // gera arquivo .json e o salva na pasta raíz
        const fs= require('fs')
        const path= require('path')
        const arquivo= JSON.stringify(meta)
        fs.writeFile(path.join(__dirname, '../../../server/results/arquivo.json'), arquivo, (err) =>{
            if (err) {
                throw err;
            } else console.log("Arquivo criado com sucesso!")
        })
        
        return Metas.insert({
            meta,
            data_criacao: new Date()
        })
    }

})