document.getElementById("stage-switch").addEventListener('change', changeStage)

const curtains = document.getElementById('curtains')

function changeStage(event) {
    if(event.target.checked) {
        curtains.classList.add('second-stage')
    } else {
        curtains.classList.remove('second-stage')
    }
}