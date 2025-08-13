const Personagem = require("./src/class/Personagem")

const p1 = new Personagem("John", "Arqueiro", 50)
const p2 = new Personagem("Helder", "Mago", 1250000)
const p3 = new Personagem("Caio Breno", "Guerreiro", 2500)

p1.mostrarInfo()
p1.atacar(50)

p2.mostrarInfo()
p2.atacar(100)

p3.mostrarInfo()
p3.atacar(5000)