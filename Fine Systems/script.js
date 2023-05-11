function calculate() {
    const v = window.document.getElementById('txtvel')
    const vel = Number(v.value)
    const result = window.document.getElementById('result')
    result.innerHTML = `<p>Sua velocidade atual é <i>${vel}<i>KM/H</p>`
    if (vel > 60) {
        result.innerHTML = `<p>Você está sendo <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }else{
        result.innerHTML = `<p>Você está dentro das normas da via. Continue dirigindo com atenção!</p>`
    }
}