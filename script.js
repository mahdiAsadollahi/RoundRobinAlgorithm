let proccesses = [
    { name: "P1", burstTime: 5 },
    { name: "P2", burstTime: 3 },
    { name: "P3", burstTime: 8 },
    { name: "P4", burstTime: 6 },
    { name: "P5", burstTime: 4 }
]

let timeQuantom = 2

let queue = []

for (let i = 0; i < proccesses.length; i++) {
    queue.push(proccesses[i])
}

while (queue.length > 0) {
    let currentProccess = queue.shift()

    for (let i = 0; i < timeQuantom; i++) {
        if (currentProccess.burstTime > 0) {
            console.log(`Running : ${currentProccess.name}`);
            currentProccess.burstTime--
        }
    }

    if (currentProccess.burstTime > 0) {
        queue.push(currentProccess)
    }
}