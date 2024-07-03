const numero1 = parseInt(prompt(`Ingrese un numero`));
const numero2 = parseInt(prompt(`Ingrese un numero`));
const numero3 = parseInt(prompt(`Ingrese un numero`));
if(numero1 > numero2 && numero1 > numero3){
    document.write(`El numero mayor es ${numero1}`)
}
else{
    if(numero2 > numero3 && numero2 > numero1)
    document.write(`El numero mayor es ${numero2}`)
else{
    document.write(`El numero mayor es ${numero3}`)
}
}
