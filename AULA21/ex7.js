const io = require("../Io/io") // falta arrumar os textos

const anobi = io.readInt()

if(anobi % 400 === 0 ||(anobi % 4 === 0 && anobi % 100 !== 0 )) {
    io.write("O ano é Bissexto.")
}else {
io.write("Não é Bissexto.")
}

