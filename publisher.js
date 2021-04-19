const amqp = require('amqplib')

const msg = {number:19}

connect();
async function connect(){
    try {
        const conn = amqp.connect("amqp://localhost:5672");
        const channel = (await conn).createChannel()
        const result =(await channel).assertQueue("tasks")
        ;(await channel).sendToQueue("tasks", Buffer.from(JSON.stringify(msg)))
        console.log(`Task send successfully ${msg.number}`)
    } catch (error) {
        console.log(error)
    }
}