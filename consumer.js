const amqp = require('amqplib')

connect();
async function connect(){
    try {
        const conn = amqp.connect("amqp://localhost:5672");
        const channel = (await conn).createChannel()
        const result =(await channel).assertQueue("tasks")
        
        ;(await channel).consume('tasks', msg=>{
            console.log(Buffer.from(msg.content).toString())
        })
        console.log(channel.value())
    } catch (error) {
        console.log(error)
    }
}