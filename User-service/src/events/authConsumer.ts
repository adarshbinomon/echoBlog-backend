import {kafka} from '../config/kafkaClient'
import {addUser} from './consumerHandler'
import { createUserController } from '../libs/controller/consumeControllers'

const consumer=kafka.consumer({
    groupId:"auth-service"
})

 




export const userConsumer = async(dependencies:any)=>{
    try {
        await consumer.connect()
        await consumer.subscribe({topic:"authTopic",fromBeginning:true})
        await consumer.run({
            eachMessage:async({message})=>{
                const bynerydata:any=message.value
                const jsonstring:string=bynerydata?.toString()
                const jsondata=JSON.parse(jsonstring)
                const messagetype=jsondata?.type
                if(messagetype == 'createUser'){
                    console.log('consumer',jsondata);
                    
                    await createUserController(dependencies,jsondata.data)
                }
            }
        })
        
    } catch (error) {
        console.log('Error in auth consumer',error);
        
    }
}