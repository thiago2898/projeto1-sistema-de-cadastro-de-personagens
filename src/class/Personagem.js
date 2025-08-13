class Personagem {
    #vida
    constructor(nome, classe, ptsVida) {
        this.nome = nome
        this.#vida = ptsVida
        this.classe = classe
    }

    atacar(potencia) {
        console.log(`O personagem ${this.nome} atacou, sua magnitude equivale a ${potencia}`)
    }

    mostrarInfo() {
        const string = `
        ======================================
        O nome do personagem criado é ${this.nome}
        Sua classe é: ${this.classe}
        Seus pontos de vida atuais são: ${this.#vida}
        ======================================
        `
        console.log(string)
    }
}

module.exports = Personagem