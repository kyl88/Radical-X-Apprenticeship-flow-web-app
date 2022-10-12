const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({

    ios_developer:{
     type: String,
     required: true,
    
    },
    
    android_developer:{
     type: String,
     required: true,
        
    },
    
    full_stack_dev:{
     type: String,
     required: true,
            
    },
    
    back_end_dev:{
     type: String,
     required: true,
                
    },
    
    front_end_dev:{
      type: String,
       required: true,
                    
    },
    
    
    required_skills:{
     type: String,
         required: true,
            
    },
        
    complimentary_skills:{
     type: String,
     required: true,
                
     },
        
    minimium_hours:{
     type: UTF-8,
     required: true,
                    
    },
        
    location_preferences:{
     type: String,
     required: true,
                        
    }


})

module.exports = mongoose.model('Team Roles', roleSchema)