const proccessNameInput = document.getElementById('proccessNameInput')
const burstTimeInput = document.getElementById('burstTimeInput')
const addProccessBtn = document.getElementById('addProccessBtn')
const queueElem = document.getElementById('queue')


const queue = null;

addProccessBtn.addEventListener("click", () => {
    let newProccess = {
        name: proccessNameInput.value,
        burstTime: +burstTimeInput.value
    }

    let getQueueLocalstorage = JSON.parse(localStorage.getItem('queue'))

    if (!getQueueLocalstorage) {
        queue = [{ ...newProccess }]
        localStorage.setItem('queue', JSON.stringify(queue))
        Swal.fire({
            icon: 'success',
            title: 'Good Job :))',
            text: 'proccess add in queue'
        })
    } else {
        let queue = [...getQueueLocalstorage, newProccess]
        localStorage.setItem('queue', JSON.stringify(queue))
    }

    // queue = 
})

window.addEventListener("load", () => {
    proccesses.forEach(proccess => {
        let proccessElem = document.createElement("p")
        proccessElem.innerHTML = `[{name : ${proccess.name}, burstTime : ${proccess.burstTime}}]`
        queueElem.append(proccessElem)
    })
})



// let timeQuantom = 2

// let queue = []

// for (let i = 0; i < proccesses.length; i++) {
//     queue.push(proccesses[i])
// }

// while (queue.length > 0) {
//     let currentProccess = queue.shift()

//     for (let i = 0; i < timeQuantom; i++) {
//         if (currentProccess.burstTime > 0) {
//             console.log(`Running : ${currentProccess.name}`);
//             currentProccess.burstTime--
//         }
//     }

//     if (currentProccess.burstTime > 0) {
//         queue.push(currentProccess)
//     }
// }