const array_subjects=
		[
			'MATEMATICAS',
            'FISICA',
            'COMPUTACION',
            'LITERATURA',
            'PSICOLOGIA',
            'QUIMICA'
		];

		let canvas=document.getElementById("idcanvas");
		let ctx=canvas.getContext("2d");
		let center=canvas.width/2;

		ctx.beginPath();
		ctx.moveTo(center,center);
		ctx.arc(center,center,center,0, 2*Math.PI);
		ctx.lineTo(center,center);
		ctx.fillStyle ='#d1d1d1';
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(center,center);
		ctx.arc(center,center,center-10,0, 2*Math.PI);
		ctx.lineTo(center,center);
		ctx.fillStyle ='#bfad0f';
		ctx.fill();

		for (var i = 0; i < array_subjects.length; i++) {
			ctx.beginPath();
			ctx.moveTo(center,center);
			ctx.arc(center,center,center-20,i*2*Math.PI/array_subjects.length, (i+1)*2*Math.PI/array_subjects.length);
			ctx.lineTo(center,center);
			ctx.fillStyle =random_color();
			ctx.fill();

			ctx.save();
			ctx.translate(center, center);
			ctx.rotate(3*2*Math.PI/(5*array_subjects.length)+i*2*Math.PI/array_subjects.length);
			ctx.translate(-center, -center);
			ctx.font = "30px Arial";
			ctx.textAlign = "right";
			ctx.fillStyle = "white";
			ctx.fillText(array_subjects[i], canvas.width-30, center);
			ctx.restore();
		}

		let pos_ini=0;
		let clic=0;
		let movement;
		function girar(){
			if (clic==0) {
				let canvas=document.getElementById("idcanvas");
				movement=setInterval(function(){
					pos_ini+=10;
					canvas.style.transform='rotate('+pos_ini+'deg)';
				},10);
				clic=1;
				document.getElementById("idestado").innerHTML="DETENER";
			}else{
				clearInterval(movement);
				clic=0;
				document.getElementById("idestado").innerHTML="GIRAR";
			}
		}

		function random_color(){
			let ar_digit=['2','3','4','5','6','7','8','9'];
			let color='';
			let i=0;
			while(i<6){
				let pos=Math.round(Math.random()*(ar_digit.length-1));
				color=color+''+ar_digit[pos];
				i++;
			}
			return '#'+color;
		}