const proccessNameInput = document.getElementById('proccessNameInput')
const burstTimeInput = document.getElementById('burstTimeInput')
const addProccessBtn = document.getElementById('addProccessBtn')
const queueElem = document.getElementById('queue')
const runBtn = document.getElementById('runBtn')
const consoleElem = document.getElementById('console')
const clearBtn = document.getElementById('clearBtn')


let proccesses = null;

addProccessBtn.addEventListener("click", () => {
    let newProccess = {
        name: proccessNameInput.value,
        burstTime: +burstTimeInput.value
    }

    let getProccessesLocalstorage = JSON.parse(localStorage.getItem('proccesses'))

    if (!getProccessesLocalstorage) {
        proccesses = [{ ...newProccess }]
        localStorage.setItem('proccesses', JSON.stringify(proccesses))
        Swal.fire({
            icon: 'success',
            title: 'Good Job :))',
            text: 'proccess add in queue'
        })
        deleteInputValue()
        reloadProccess()
    } else {
        let proccesses = [...getProccessesLocalstorage, newProccess]
        localStorage.setItem('proccesses', JSON.stringify(proccesses))
        Swal.fire({
            icon: 'success',
            title: 'Good Job :))',
            text: 'proccess add in queue'
        })
        deleteInputValue()
        reloadProccess()
    }
})

function reloadProccess() {

    const getProccesses = JSON.parse(localStorage.getItem('proccesses'))

    if (!getProccesses) {
        queueElem.innerHTML = "Empty ..."
    } else {
        queueElem.innerHTML = ""
        getProccesses.forEach(proccess => {
            let proccessElem = document.createElement("p")
            proccessElem.innerHTML = `[{name : ${proccess.name}, burstTime : ${proccess.burstTime}}]`
            queueElem.append(proccessElem)
        })
    }

}

function clearConsole() {
    consoleElem.innerHTML = "queue is empty ..."
}

function deleteInputValue() {
    proccessNameInput.value = ""
    burstTimeInput.value = ""
}

window.addEventListener("load", () => {
    reloadProccess()
})

runBtn.addEventListener("click", () => {
    consoleElem.innerHTML = ""

    let timeQuantom = 2

    proccesses = JSON.parse(localStorage.getItem('proccesses'))

    if (!proccesses) {
        let emptyLogElem = document.createElement("p")
        emptyLogElem.innerHTML = "queue is empty ..."
        consoleElem.append(emptyLogElem)
    } else {
        let queue = []

        for (let i = 0; i < proccesses.length; i++) {
            queue.push(proccesses[i])
        }

        while (queue.length > 0) {
            let currentProccess = queue.shift()

            for (let i = 0; i < timeQuantom; i++) {
                if (currentProccess.burstTime > 0) {
                    let logElem = document.createElement("p")
                    logElem.innerHTML = `>> Running ${currentProccess.name} for ${i + 1} time unit(s)`
                    consoleElem.append(logElem)
                    currentProccess.burstTime--
                }
            }

            if (currentProccess.burstTime > 0) {
                queue.push(currentProccess)
            }
        }

    }
})

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    reloadProccess()
    clearConsole()
})