let event=require('events');
let eventEmitter=new event.EventEmitter()
// console.log(eventEmitter);
     //creating event
     //ad the specific event
// eventEmitter.on('logout',()=>{
//     console.log('hello logout event is done');
// })
// eventEmitter.once('logout',()=>{
//     console.log('hello logout event is done');
// })
// eventEmitter.emit('logout')
// eventEmitter.emit('logout')
// eventEmitter.emit('logout')
// eventEmitter.emit('logout')

// eventEmitter.addListener('login',()=>{
//     console.log('login is done');
// })

// eventEmitter.emit('login')

// let all=eventEmitter.eventNames()
// console.log(all);

// eventEmitter.addListener('login',(name,add)=>{
//     console.log(`hello this is ${name} and i am login from ${add}`);
// })

// eventEmitter.emit('login','manohar','kadapa')

// eventEmitter.removeAllListeners()
// console.log(eventEmitter.eventNames());

eventEmitter.setMaxListeners(50)
let max=eventEmitter.getMaxListeners()
console.log(max);
