// Vars: nome, qtd_exp
let nome = 'Mário'
let qtd_exp = 5000
let nivel = ''

if(qtd_exp <= 1000){
	nivel = 'Ferro'
}else if(qtd_exp <= 2000){
	nivel = 'Bronze'
}else if(qtd_exp <= 5000){
	nivel = 'Prata'
}else if(qtd_exp <= 6000){
	nivel = 'Ouro'
}else if(qtd_exp <= 8000){
	nivel = 'Platina Diamante'
}else if(qtd_exp <= 9000){
	nivel = 'Ascendente'
}else if(qtd_exp <= 10000){
	nivel = 'Imortal'
}else if(qtd_exp > 10000){
	nivel = 'Radiante'
}

console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
