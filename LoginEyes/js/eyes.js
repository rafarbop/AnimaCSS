
document.getElementById("main-section").onmousemove = (ev) => {
    const x_windom = window.innerWidth
    const y_windom = window.innerHeight

    const porctX = Math.round(ev.clientX*100/x_windom)/100
    const porctY = Math.round(ev.clientY*100/y_windom)/100

    const positionEyeX = porctX*40-20+"px"
    let positionEyeY = 0;
    if (porctY <= 0.29) {
        const positionY_up = (0.29-porctY)/0.29
        positionEyeY = positionY_up*-6+"px"
    }
    else if (porctY > 0.29) {
        const positionY_down = (porctY-0.29)/0.71
        positionEyeY = positionY_down*6+"px"
    }

    document.getElementsByClassName("eye-ball").item(0).style.setProperty('--position_eye_x',positionEyeX)
    document.getElementsByClassName("eye-ball").item(0).style.setProperty('--position_eye_y',positionEyeY)
    document.getElementsByClassName("eye-ball").item(1).style.setProperty('--position_eye_x',positionEyeX)
    document.getElementsByClassName("eye-ball").item(1).style.setProperty('--position_eye_y',positionEyeY)
}

document.getElementById("login_password").onfocus = (ev) => {
    document.getElementById("vendado").classList.add("vendado")
    document.querySelector("#boca>div").classList.add("boca-triste")
}
document.getElementById("login_password").onmouseenter = (ev) => {
    document.getElementById("vendado").classList.add("vendado")
    document.querySelector("#boca>div").classList.add("boca-triste")
}
document.getElementById("login_password").onmouseout = (ev) => {
    document.getElementById("vendado").classList.remove("vendado")
    document.querySelector("#boca>div").classList.remove("boca-triste")
}
document.getElementById("btn-entrar").onfocus = (ev) => {
    document.getElementById("vendado").classList.remove("vendado")
    document.querySelector("#boca>div").classList.remove("boca-triste")
}