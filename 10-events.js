const EventEmitter = require('events')

const customEmitter = new EventEmitter()
customEmitter.on('response', (name,id) =>{ //we can have as many methods as we want
    console.log(`data received of user ${name} with id: ${id}`)
})
customEmitter.on('response', () =>{ 
    console.log('once again')
})
customEmitter.emit('response', 'john' , 34)

//the order for emit and on matters..first goes on and then emit
//as if first there is emit...it won't listen to any event then how will it emit

//stream wali cheez nahi ke