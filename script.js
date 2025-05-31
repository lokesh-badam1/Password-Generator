let ran1 = document.getElementById("ran1")
let ran2 = document.getElementById("ran2")
let ran3 = document.getElementById("ran3")
let ran4 = document.getElementById("ran4")

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ]

function rangen(){
    let pass = ""
    for(let i =0;i<15;i++){
        pass += characters[Math.floor(Math.random()*characters.length)]
    }
    return pass
}

function rangenfill(){
    ran1.value = rangen()
    ran2.value = rangen()
    ran3.value = rangen()
    ran4.value = rangen()
    console.log(23)
}
