var mongoose=require("mongoose");
var Schema=mongoose.Schema;

mongoose.connect("mongodb://localhost/grupos");

var nuevo_grupo=new Schema({grupo: String,
                           materia: String,
                           profesor: String,
                           miembros: [{type:Schema.Types.ObjectId, ref: "User"}]});

var Grupo=mongoose.model("Grupo", nuevo_grupo);

module.exports=Grupo;