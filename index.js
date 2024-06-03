let hire_buttons=document.getElementsByClassName("hire_button");
for (let i = 0; i < hire_buttons.length; i++){
    hire_buttons.item(i).addEventListener("click",()=>{
        window.open("https://es.fiverr.com/void_games?up_rollout=true","_blank")
    })
}let mail_buttons=document.getElementsByClassName("mail_button");
for (let i = 0; i < mail_buttons.length; i++){
    mail_buttons.item(i).addEventListener("click",()=>{
        window.open("mailto:andresdavidcalderonjimenez@gmail.com?subject=New%20project","_blank")
    })
}

document.getElementById("download_toy").addEventListener("click",()=>{
    window.open("https://andres-dev.itch.io/pixel-liquid-toy","_blank")
})

document.getElementById("randamatch_download").addEventListener("click",()=>{
    window.open("https://andres-dev.itch.io/randamatch","_blank")
})

document.getElementById("smart_notes_web").addEventListener("click",()=>{
    window.open("http://localhost:8080/web_apps/smart_notes/index.html")
})
document.getElementById("smart_notes_source").addEventListener("click",()=>{
    window.open("https://github.com/AndresDavidCalderon/smart_notes")
})

document.getElementById("ignis_play").addEventListener("click",()=>{
    window.open("https://andresdavidcalderon.github.io/web_apps/ignis_web/ignis.html")
})

document.getElementById("ignis_source").addEventListener("click",()=>{
    window.open("https://github.com/AndresDavidCalderon/ignis")
})
