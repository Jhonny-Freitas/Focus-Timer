import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    buttonStop
} from "./elements.js"

export default function({controls, timer, sound}) {

    buttonPlay.addEventListener("click", buttonPlayClick)
    buttonPause.addEventListener("click", buttonPauseClick)
    buttonStop.addEventListener("click", buttonStopClick)
    buttonSoundOn.addEventListener("click",buttonSoundOnClick)
    buttonSoundOff.addEventListener("click",buttonSoundOffClick)
    buttonSet.addEventListener("click",buttonSetClick)

    function buttonPlayClick(){
        controls.play()
        timer.countdown()
        sound.pressButton()
    }

    function buttonPauseClick() {
        controls.pause()
        timer.hold()
        sound.pressButton()
    }

    function buttonStopClick(){
        controls.reset()
        timer.reset()
        sound.pressButton()
    }

    function buttonSoundOnClick(){
        buttonSoundOn.classList.add("hide")
        buttonSoundOff.classList.remove("hide")
        sound.bgAudio.pause()
    }

    function buttonSoundOffClick(){
        buttonSoundOn.classList.remove("hide")
        buttonSoundOff.classList.add("hide")
        sound.bgAudio.play()
    }

    function buttonSetClick(){
        let newMinutes = controls.getMinutes()

        if(!newMinutes){
            timer.reset()
            return
        }
        
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    }
}