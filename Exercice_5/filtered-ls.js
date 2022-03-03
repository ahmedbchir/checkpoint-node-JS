const fs=require('fs');
const path=require('path');
const ext='.'+process.argv[3];

fs.readdir(process.argv[2],function(err,list){
	if(err){
		return console.log(err)
	}
	list.find(function (file){
		if(path.extname(file)===ext){
			console.log(file)
		}
	})
})