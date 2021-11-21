
document.getElementById("main-section").onmousemove = (ev) => {
    const x_windom = window.innerWidth
    const y_windom = window.innerHeight
    console.log("\nPosição do Mouse: ",ev.clientX,ev.clientY)
    console.log("Tamanho da Janela: ", x_windom,y_windom )
    const porctX = Math.round(ev.clientX*100/window.innerWidth)/100
    const porctY = Math.round(ev.clientY*100/window.innerHeight)/100
    console.log("Porcetagem Posição: ",porctX,porctY)

    const positionEyeX = porctX*75+"%"

    document.getElementsByClassName("eye").item(0).style.setProperty('--position_eye_x',positionEyeX)
    document.getElementsByClassName("eye").item(1).style.setProperty('--position_eye_x',positionEyeX)
}

document.getElementById("login_password").onfocus = (ev) => {
    document.getElementById("vendado").classList.add("vendado")
}
document.getElementById("login_password").onmouseenter = (ev) => {
    document.getElementById("vendado").classList.add("vendado")
}

document.getElementById("login_password").onmouseout = (ev) => {
    document.getElementById("vendado").classList.remove("vendado")
}

document.getElementById("btn-entrar").onfocus = (ev) => {
    document.getElementById("vendado").classList.remove("vendado")
}