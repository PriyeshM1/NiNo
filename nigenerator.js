function rand(limit){ 
	return Math.floor(Math.random() * limit)
}

function genNino(){
	var firstLetter = ['A', 'B', 'C', 'E', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		var fl = firstLetter[Math.floor(Math.random() * firstLetter.length)];
	var secondLetter = ['A', 'B', 'C', 'E', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
		var sl = secondLetter[Math.floor(Math.random() * secondLetter.length)];
	var numRange = "0123456789"
				var no=""
				for (var i=0; i<6; i++){
    				var idx = rand(10)
					no += numRange.charAt(idx)
				}
		
	var thirdLetter = ['A', 'B', 'C', 'D'];
	var tl = thirdLetter[Math.floor(Math.random() * thirdLetter.length)];
	var nino = fl + sl + no + tl;

	if(validate(nino))
		console.log(nino);
	else {
		return genNino();
	}

	function validate(nino){
  		var pattern =  /(^GB)|(^BG)|(^NK)|(^KN)|(^TN)|(^NT)|(^ZZ).+/i;
  		if(nino.match(pattern)) 
  			return false 
  		else 
  			return true
	}	
}