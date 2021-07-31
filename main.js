function calcular(tipo, valor) 
{
   
  if (tipo === 'acao') 
  {

    if (valor === 'reset') 
    {
      document.getElementById('resultado').value = ""
    }
    else if (valor === 'del')
    {
      var valor = document.getElementById('resultado').value
      var resultado = valor.slice(0, -1);
      document.getElementById('resultado').value = resultado
    }
    else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.')
    {
      document.getElementById('resultado').value += valor
    }
    else if(valor === '=')
    {
       var total = document.getElementById('resultado').value 
       var resultado = eval(total)
       document.getElementById('resultado').value = resultado
    }
    else
    {
      document.getElementById('resultado').value = "ERRO"
    }

  }
  else if (tipo === 'valor')
  {
    document.getElementById('resultado').value += valor
  }
  else
  {
    document.getElementById('resultado').value = "ERRO"
  }
  
}