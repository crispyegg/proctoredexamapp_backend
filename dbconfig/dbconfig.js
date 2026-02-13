

const mongoose = require('mongoose')

const connectUrl = 'mongodb+srv://ashifsirajkhan_db_user:HTHlKOYsCtZ1ZmAP@proctoredexamapp.9zsta9d.mongodb.net/?appName=proctoredexamapp'


mongoose.connect(connectUrl)
.then(()=>{
  console.log(`Database is connected`); 
})
.catch((err)=>{
  console.log(err);
  
})