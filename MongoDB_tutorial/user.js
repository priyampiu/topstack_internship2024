const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})
const userSchema = new mongoose.Schema({
    name: String,
    age:{
        type: Number,
        min: 1,
        max: 100,
        validate:{
            validator: v => v%2 === 0,
            message: props => '${props.value} is not even number',
        },
    },
    email:{
        type: String,
        minLength: 10,
        required: true,
        lowercase: true
    },
    dob:{
        type: Date,
        // default: ()=> Date.now(),
        default: new Date(),
    },
    dod:{
        type: Date,
        // default: ()=> Date.now(),
        default: new Date(),
        immutable: true
    },
    bf:{
       type: mongoose.SchemaTypes.ObjectId,
       ref: "user"
    },
    hobby: [String],
    address: addressSchema
    // {
    //     street: String,
    //     city: String
    //     }
    })
userSchema.methods.sayHi = function() {
    console.log(`Hi. My name is ${this.name}`)
}
userSchema.statics.findByname = function(name) {
    return this.where({name: new RegExp(name,'i')})
}
userSchema.statics.byName = function(name) {
    return this.where({name: new RegExp(name,'i')})
}
userSchema.virtual("namedEmail").get(function() {
    return `${this.name} <${this.email}>`
})
userSchema.pre("save",function(next){
    this.updatedAt=Date.now()
   throw new Error("fail save")
})
userSchema.post("save",function(doc,next){
    doc.sayHi()
    next()
})
module.exports = mongoose.model("user",userSchema)