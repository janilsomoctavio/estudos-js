function contar() {
    let txtini = document.getElementById("txtini")
    let txtpa = document.getElementById("txtpa")
    let txtfim = document.getElementById("txtfim")
    let res = document.getElementById("res")

    if (txtini.value.length == 0 || txtpa.value.length == 0 || txtfim.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"

        let i = Number(txtini.value)
        let p = Number(txtpa.value)
        let f = Number(txtfim.value)

        if (p <= 0) {
            alert("Passo inválido! Considerando passo 1")
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }

        res.innerHTML += `🏁`
    }
}