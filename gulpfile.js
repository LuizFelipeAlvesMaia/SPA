const {series, parallel} = require('gulp')
const gulp = require('gulp')

//Funções tasks separadas para melhor organização
const  {appHTML, appCSS, appIMG, appJS} = require('./gulptasks/app')
const  {depsCSS, depsFonts} = require('./gulptasks/deps')
const  {monitorarArquivos, servidor} = require('./gulptasks/servidor')


//importação das tasks na task default de cada arquivo
module.exports.default = series(
    parallel(

        series(appHTML, appCSS, appJS, appIMG),

        series(depsCSS, depsFonts)

    ), 
    servidor,
    monitorarArquivos
)
    
