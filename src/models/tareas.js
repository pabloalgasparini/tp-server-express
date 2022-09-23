const {model,Schema}=require('mongoose')

const tareasSchema= new Schema(
    
    {
        id:{
            type:Number,
            require:true
        },
        
        title: {
        type:String, 
        required: true }
        
        ,
        descripcion:{
            type: String,
            require: true
        },

        estados:{
            type: String,
            require: true 
        }

        
        
    }
)

module.exports= model("tareas", tareasSchema)