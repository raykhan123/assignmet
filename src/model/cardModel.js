const mongoose=require('mongoose')

const cardSchema=new mongoose.Schema({
    cardNumber:{
        type:String,
        require:true,
    },
    cardType:{
        type:String,
        require:true,
    },
    customerName:{
        type:String,
        require:true,
        unique:true
    },
    status:{
        type:String,
        require:true,
        default:'ACTIVE'
    },
    vision:{
        type:String,
        require:true,
    },
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        require:true,
    },
})

module.exports=mongoose.model('Card',cardSchema)