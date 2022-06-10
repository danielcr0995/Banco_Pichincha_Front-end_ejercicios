// const fs = require("fs");
const fs = require('fs-extra')

const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
]

const meses28 = [meses[1]]
const meses30 = [meses[3], meses[5],meses[8],meses[10]]
// console.log(meses30)
// console.log(meses28)

const fecha = new Date();
const actualYear= fecha.getFullYear()

function bisiesto(year){
    if(year % 4 == 0){
        if (year % 100==0){
            if( year % 400 == 0){
                return true
            }else {
                return false
            }
        } else {
            return true
        }

    }else {
        return false
    }
}

// console.log(bisiesto(2016))

async function crearDias(ndias, mes, ano){
    for( let dia=1; dia<=ndias; dia++){
        await fs.createFile(`${ano}/${mes}/${dia}.txt`)
    } 
}
// fs.writeFile("./1.txt")

// fs.closeSync(fs.openSync("./1.txt", 'a'))

// fs.mkdir("./prueba/mes"\\)

async function crearCarpetas(){

    for (let i = 2016; i<=actualYear; i++){
        // console.log(i)
        // fs.mkdir()
        // fs.mkdir(`${i}/${meses[j]}`)
        for( let j= 0; j< meses.length; j++){
            // console.log(meses[j])
            await fs.ensureDir(`${i}/${meses[j]}`)
        }
    }
}

// crearCarpetas()

async function crearArchivos(){    
    for (let i = 2016; i<=actualYear; i++){
        console.log(i)
    // fs.mkdir()
        for( let j= 0; j< meses.length; j++){
            console.log(meses[j])
            // fs.mkdir(`${i}/${meses[j]}`)
            if ( meses28.includes(meses[j])){
                if(bisiesto(i)){
                    await crearDias(29, meses[j],i);               
                }else{
                    await crearDias(28, meses[j],i);
                }
            }else if(meses30.includes(meses[j])){
                await crearDias(30,meses[j],i);
            }else{
                await crearDias(31,meses[j],i);
            }
        }
    }
}



crearCarpetas()
crearArchivos()

// marco  aseicha