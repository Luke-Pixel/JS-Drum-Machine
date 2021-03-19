window.addEventListener('load', () =>{ 
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector('.visual')
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ]


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function (){
            sounds[index].currentTime = 0 
            sounds[index].play();
            createBubble(index)
        })
    })

    //animation function 
    const createBubble = index => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`
        //remove circle at animation end
        bubble.addEventListener('animationend', function (){
            visual.removeChild(this)
        })
        
    }
})