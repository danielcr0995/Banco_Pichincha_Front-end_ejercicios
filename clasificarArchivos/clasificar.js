const fs = require("fs-extra");
const path = require("path")

function crearCarpetas(carpetas){
    carpetas.forEach(carpeta=>{
        fs.ensureDir(`./${carpeta}`)
    })
}

const carpetas = ["imagenes", "pdf", "word", "exel"] 

crearCarpetas(carpetas)


function clasificar(files){
    extImg = [".jpg", ".png", ".JPG", ".PNG"]
    extPDF = [".pdf"]
    extExel = [".ods", ".xlsx", ".csv", ".xml", ".xls"]
    extWord = [".odt",".docx"]

    files.forEach( file=>{
        let ext = path.extname(file)             
        if(extImg.includes(ext)) {
             fs.move(`${file}`, `./imagenes/${file}`)
        }else if(extPDF.includes(ext)) {
             fs.move(`${file}`, `./pdf/${file}`)
        }else if(extExel.includes(ext)) {
             fs.move(`${file}`, `./exel/${file}`)
        }else if(extWord.includes(ext)) {
             fs.move(`${file}`, `./word/${file}`)
        }
    })
}

fs.readdir(".",(error,files)=>{
    // console.log(files)
    clasificar(files);
    console.log("Archivos clasificados");
    if (error) {
        console.log(error)
    }

})