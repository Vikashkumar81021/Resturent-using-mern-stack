import mongoose from 'mongoose'
import validator from 'validator'

const reservationSchema= new mongoose.Schema({
  firstname:{
    type:String,
    required:true,
    minLength:[3,"First name contain at least 3 characcter"],
    maxLength:[15,"first name cannot exceed 30 character"]
  },
  lastname:{
    type:String,
    required:true,
    minLength:[3,"First name contain at least 3 characcter"],
    maxLength:[15,"first name cannot exceed 30 character"]
  },
  email:{
    type:String,
    required:true,
    validator:[validator.isEmail,"Provide a valid email "]
  },
  phone:{
    type:String,
    required:true,
    minLength:[10,"phone number must contain only 10 digit"],
    maxLength:[10,"phone number must contain only 10 digit"]
  },
  time:{
    type:String,
  
  },
  data:{
    type:String,
    
  }
  
})

export const Reservation=mongoose.model("Reservation",reservationSchema)