  var shapes = ['../shapes/circle.png' , '../shapes/square.png' , '../shapes/diamond.png' , '../shapes/heart.png' , '../shapes/rectangle.png' ,
	     '../shapes/oblong.png' ,'../shapes/star.png' , '../shapes/triangle.png' ];
  var ready;
  var answerArray = [];
  

  
	// --- DEFINE SOUNDS ---
		var questionSound = document.createElement('audio');
		questionSound.setAttribute('src','../audio/ivy-kid.mp3');

		var soundLdo = document.createElement('audio');
	    soundLdo.setAttribute('src', 'doremi/Ldo.wav');

	    var soundRe = document.createElement('audio');
	    soundRe.setAttribute('src', 'doremi/re.wav');

	    var soundMi = document.createElement('audio');
	    soundMi.setAttribute('src', 'doremi/mi.wav');

	    var soundFa = document.createElement('audio');
	    soundFa.setAttribute('src', 'doremi/fa.wav');

	    var soundSol = document.createElement('audio');
	    soundSol.setAttribute('src', 'doremi/sol.wav');

	    var soundLa = document.createElement('audio');
	    soundLa.setAttribute('src', 'doremi/la.wav');

	    var soundSi = document.createElement('audio');
	    soundSi.setAttribute('src', 'doremi/si.wav');

	    var soundHdo = document.createElement('audio');
	    soundHdo.setAttribute('src', 'doremi/Hdo.wav');

	    //--2ND SET OF SOUNDS
	    var soundLdo2 = document.createElement('audio');
	    soundLdo2.setAttribute('src', 'doremi/Ldo.wav');

	    var soundRe2 = document.createElement('audio');
	    soundRe2.setAttribute('src', 'doremi/re.wav');

	    var soundMi2 = document.createElement('audio');
	    soundMi2.setAttribute('src', 'doremi/mi.wav');

	    var soundFa2 = document.createElement('audio');
	    soundFa2.setAttribute('src', 'doremi/fa.wav');

	    var soundSol2 = document.createElement('audio');
	    soundSol2.setAttribute('src', 'doremi/sol.wav');

	    var soundLa2 = document.createElement('audio');
	    soundLa2.setAttribute('src', 'doremi/la.wav');

	    var soundSi2 = document.createElement('audio');
	    soundSi2.setAttribute('src', 'doremi/si.wav');

	    var soundHdo2 = document.createElement('audio');
	    soundHdo2.setAttribute('src', 'doremi/Hdo.wav');

	    //-- 3rd SET of SOund
	    var soundLdo3 = document.createElement('audio');
	    soundLdo3.setAttribute('src', 'doremi/Ldo.wav');

	    var soundRe3 = document.createElement('audio');
	    soundRe3.setAttribute('src', 'doremi/re.wav');

	    var soundMi3 = document.createElement('audio');
	    soundMi3.setAttribute('src', 'doremi/mi.wav');

	    var soundFa3 = document.createElement('audio');
	    soundFa3.setAttribute('src', 'doremi/fa.wav');

	    var soundSol3 = document.createElement('audio');
	    soundSol3.setAttribute('src', 'doremi/sol.wav');

	    var soundLa3 = document.createElement('audio');
	    soundLa3.setAttribute('src', 'doremi/la.wav');

	    var soundSi3 = document.createElement('audio');
	    soundSi3.setAttribute('src', 'doremi/si.wav');

	    var soundHdo3 = document.createElement('audio');
	    soundHdo3.setAttribute('src', 'doremi/Hdo.wav');

	    //-- SOUND PATTERN
	    var soundLdoPat = document.createElement('audio');
	    soundLdoPat.setAttribute('src', 'doremi/Ldo.wav');

	    var soundRePat = document.createElement('audio');
	    soundRePat.setAttribute('src', 'doremi/re.wav');

	    var soundMiPat = document.createElement('audio');
	    soundMiPat.setAttribute('src', 'doremi/mi.wav');

	    var soundFaPat = document.createElement('audio');
	    soundFaPat.setAttribute('src', 'doremi/fa.wav');

	    var soundSolPat = document.createElement('audio');
	    soundSolPat.setAttribute('src', 'doremi/sol.wav');

	    var soundLaPat = document.createElement('audio');
	    soundLdoPat.setAttribute('src', 'doremi/la.wav');

	    var soundSiPat = document.createElement('audio');
	    soundSiPat.setAttribute('src', 'doremi/si.wav');

	    var soundHdoPat = document.createElement('audio');
	    soundHdoPat.setAttribute('src', 'doremi/Hdo.wav');

	// --- END DEFINE SOUNDS ---

$('document').ready(function()
	{
		//------ FOR PRACTICE MODE
		$('#p_Ldo').click(function()
		{
			
			soundLdo.currentTime = 0;
			$(this).effect('shake','slow').promise(soundLdo.play());
		});
		$('#p_re').click(function()
		{
			soundRe.currentTime = 0;
			$(this).effect('shake','slow').promise(soundRe.play());
		});
		$('#p_mi').click(function()
		{
			soundMi.currentTime = 0;
			$(this).effect('shake','slow').promise(soundMi.play());
		});
		$('#p_fa').click(function()
		{
			soundFa.currentTime = 0;
			$(this).effect('shake','slow').promise(soundFa.play());
		});
		$('#p_sol').click(function()
		{
			soundSol.currentTime = 0;
			$(this).effect('shake','slow').promise(soundSol.play());
		});
		$('#p_la').click(function()
		{
			soundLa.currentTime = 0;
			$(this).effect('shake','slow').promise(soundLa.play());
		});
		$('#p_si').click(function()
		{
			soundSi.currentTime = 0;
			$(this).effect('shake','slow').promise(soundSi.play());
		});
		$('#p_Hdo').click(function()
		{
			soundHdo.currentTime = 0;
			$(this).effect('shake','slow').promise(soundHdo.play());
		});
						

//------ FOR PRACTICE MODE END


//--------------ROW ROW ROW LEVEL 1 --------
	    

	    //--- RANDOM SOUNDS
	  	var ransound = get3RandomSounds(soundLdo,soundRe,soundMi);
	  	
	  	var row_lvl_1_snd1 = soundMi;
	  	var row_lvl_1_snd2 = soundSol;
	  	var row_lvl_1_snd3 = soundLa;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get3RandomShapes('row_lvl_1_',row_lvl_1_snd1,row_lvl_1_snd2,row_lvl_1_snd3,'sol','mi');

	    //-- END RANDOM SHAPES
		
		startGame3Shapes('row_lvl_1_',row_lvl_1_snd1,row_lvl_1_snd2,row_lvl_1_snd3,questionSound,soundSol2,soundMi2);


//-------------- END ROW ROW ROW LEVEL 1 --------




//--------------ROW ROW ROW LEVEL 2 --------
	 //--- RANDOM SOUNDS
	  	var ransound = get3RandomSounds(soundLdo,soundRe,soundMi);
	  	var row_lvl_2_snd1 = soundLdo;
	  	var row_lvl_2_snd2 = soundSol;
	  	var row_lvl_2_snd3 = soundRe;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get3RandomShapes('row_lvl_2_',row_lvl_2_snd1,row_lvl_2_snd2,row_lvl_2_snd3,'sol','sol');

	    //-- END RANDOM SHAPES
		
		startGame3Shapes('row_lvl_2_',row_lvl_2_snd1,row_lvl_2_snd2,row_lvl_2_snd3,questionSound,soundSol2,soundSol3);


//-------------- END ROW ROW ROW LEVEL 2 --------


//--------------ROW ROW ROW LEVEL 3 --------
	//--- RANDOM SOUNDS
	  	var ransound = get3RandomSounds(soundLdo,soundRe,soundMi);
	  	var row_lvl_3_snd1 = soundSol;
	  	var row_lvl_3_snd2 = soundSi;
	  	var row_lvl_3_snd3 = soundMi;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get3RandomShapes('row_lvl_3_',row_lvl_3_snd1,row_lvl_3_snd2,row_lvl_3_snd3,'mi','sol');

	    //-- END RANDOM SHAPES
		
		startGame3Shapes('row_lvl_3_',row_lvl_3_snd1,row_lvl_3_snd2,row_lvl_3_snd3,questionSound,soundMi2,soundSol2);

//-------------- END ROW ROW ROW LEVEL 3 --------


//--------------ROW ROW ROW LEVEL 4 --------
	//--- RANDOM SOUNDS
	  	var ransound = get3RandomSounds(soundLdo,soundRe,soundMi);
	  	var row_lvl_4_snd1 = soundSi;
	  	var row_lvl_4_snd2 = soundSol;
	  	var row_lvl_4_snd3 = soundMi;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get3RandomShapes('row_lvl_4_',row_lvl_4_snd1,row_lvl_4_snd2,row_lvl_4_snd3,'sol','mi');

	    //-- END RANDOM SHAPES
		
		startGame3Shapes('row_lvl_4_',row_lvl_4_snd1,row_lvl_4_snd2,row_lvl_4_snd3,questionSound,soundSol2,soundMi2);

//-------------- END ROW ROW ROW LEVEL 4 --------


//--------------ROW ROW ROW LEVEL 5 --------
	//--- RANDOM SOUNDS
	  	var ransound = get3RandomSounds(soundFa,soundSol,soundMi);
	  	var row_lvl_5_snd1 = soundSol;
	  	var row_lvl_5_snd2 = soundRe;
	  	var row_lvl_5_snd3 = soundLa;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get3RandomShapes('row_lvl_5_',row_lvl_5_snd1,row_lvl_5_snd2,row_lvl_5_snd3,'la','sol');

	    //-- END RANDOM SHAPES
		
		startGame3Shapes('row_lvl_5_',row_lvl_5_snd1,row_lvl_5_snd2,row_lvl_5_snd3,questionSound,soundLa2,soundSol2);

//-------------- END ROW ROW ROW LEVEL 5 --------

//--------------ROW ROW ROW LEVEL 6 --------
	//--- RANDOM SOUNDS
	  	var ransound = get5RandomSounds(soundFa,soundLa,soundMi,soundSi,soundHdo);
	  	var row_lvl_6_snd1 = soundFa;
	  	var row_lvl_6_snd2 = soundSol;
	  	var row_lvl_6_snd3 = soundMi;
	  	var row_lvl_6_snd4 = soundSi;
	  	var row_lvl_6_snd5 = soundRe;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get5RandomShapes('row_lvl_6_',row_lvl_6_snd1,row_lvl_6_snd2,row_lvl_6_snd3,row_lvl_6_snd4,row_lvl_6_snd5,'sol','mi','fa');

	    //-- END RANDOM SHAPES
		
		startGame5Shapes('row_lvl_6_',row_lvl_6_snd1,row_lvl_6_snd2,row_lvl_6_snd3,row_lvl_6_snd4,row_lvl_6_snd5,questionSound,soundSol2,soundMi2,soundFa2);

//-------------- END ROW ROW ROW LEVEL 6 --------


//--------------ROW ROW ROW LEVEL 7 --------
	//--- RANDOM SOUNDS
	  	var ransound = get5RandomSounds(soundRe,soundFa,soundLdo,soundSol,soundMi);
	  	var row_lvl_7_snd1 = soundRe;
	  	var row_lvl_7_snd2 = soundFa;
	  	var row_lvl_7_snd3 = soundLdo;
	  	var row_lvl_7_snd4 = soundSol;
	  	var row_lvl_7_snd5 = soundMi;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get5RandomShapes('row_lvl_7_',row_lvl_7_snd1,row_lvl_7_snd2,row_lvl_7_snd3,row_lvl_7_snd4,row_lvl_7_snd5,'fa','re','re');

	    //-- END RANDOM SHAPES
		
		startGame5Shapes('row_lvl_7_',row_lvl_7_snd1,row_lvl_7_snd2,row_lvl_7_snd3,row_lvl_7_snd4,row_lvl_7_snd5,questionSound,soundFa2,soundRe2,soundRe3);

//-------------- END ROW ROW ROW LEVEL 7 --------

//--------------ROW ROW ROW LEVEL 8 --------
	//--- RANDOM SOUNDS
	  	var ransound = get5RandomSounds(soundRe,soundFa,soundLdo,soundSi,soundMi);
	  	var row_lvl_8_snd1 = soundSol;
	  	var row_lvl_8_snd2 = soundFa;
	  	var row_lvl_8_snd3 = soundRe;
	  	var row_lvl_8_snd4 = soundLa;
	  	var row_lvl_8_snd5 = soundMi;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get5RandomShapes('row_lvl_8_',row_lvl_8_snd1,row_lvl_8_snd2,row_lvl_8_snd3,row_lvl_8_snd4,row_lvl_8_snd5,'fa','fa','re');

	    //-- END RANDOM SHAPES
		
		startGame5Shapes('row_lvl_8_',row_lvl_8_snd1,row_lvl_8_snd2,row_lvl_8_snd3,row_lvl_8_snd4,row_lvl_8_snd5,questionSound,soundFa2,soundFa3,soundRe2);

//-------------- END ROW ROW ROW LEVEL 8 --------


//--------------ROW ROW ROW LEVEL 9 --------
	//--- RANDOM SOUNDS
	  	var ransound = get5RandomSounds(soundMi,soundSol,soundLdo,soundSi,soundHdo);
	  	var row_lvl_9_snd1 = soundMi;
	  	var row_lvl_9_snd2 = soundSol;
	  	var row_lvl_9_snd3 = soundLdo;
	  	var row_lvl_9_snd4 = soundFa;
	  	var row_lvl_9_snd5 = soundRe;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get5RandomShapes('row_lvl_9_',row_lvl_9_snd1,row_lvl_9_snd2,row_lvl_9_snd3,row_lvl_9_snd4,row_lvl_9_snd5,'sol','fa','mi');

	    //-- END RANDOM SHAPES
		
		startGame5Shapes('row_lvl_9_',row_lvl_9_snd1,row_lvl_9_snd2,row_lvl_9_snd3,row_lvl_9_snd4,row_lvl_9_snd5,questionSound,soundSol2,soundFa2,soundMi2);

//-------------- END ROW ROW ROW LEVEL 9 --------


//--------------ROW ROW ROW LEVEL 10 --------
	//--- RANDOM SOUNDS
	  	var ransound = get8RandomSounds(soundLdo,soundRe,soundMi,soundFa,soundSol,soundLa,soundSi,soundHdo);
	  	
	  	var row_lvl_10_snd1 = soundLdo;
	  	var row_lvl_10_snd2 = soundRe;
	  	var row_lvl_10_snd3 = soundMi;
	  	var row_lvl_10_snd4 = soundFa;
	  	var row_lvl_10_snd5 = soundSol;
	  	var row_lvl_10_snd6 = soundLa;
	  	var row_lvl_10_snd7 = soundSi;
	  	var row_lvl_10_snd8 = soundHdo;

	    //--= END RANDOM SOUNDS

	    	    //--RANDOM SHAPES

	    get8RandomShapes('row_lvl_10_',row_lvl_10_snd1,row_lvl_10_snd2,row_lvl_10_snd3,row_lvl_10_snd4,row_lvl_10_snd5,
	    	row_lvl_10_snd6,row_lvl_10_snd7,row_lvl_10_snd8,'mi','re','mi','Ldo','Ldo');

	    //-- END RANDOM SHAPES
		
		startGame8Shapes('row_lvl_10_',row_lvl_10_snd1,row_lvl_10_snd2,row_lvl_10_snd3,row_lvl_10_snd4,row_lvl_10_snd5,
			row_lvl_10_snd6,row_lvl_10_snd7,row_lvl_10_snd8,questionSound,soundMi2,soundRe2,soundMi3,soundLdo2,soundLdo3);

//-------------- END ROW ROW ROW LEVEL 10 --------


});


  function getRandomNumber(max,min)
	    {
			return Math.floor(Math.random()*(max-min+1))+min;
		}

 	function srcToTxt(source)
 	{
 		var url = $(source).attr('src');
 		console.log(url);
 		var z;
 	if (url == 'doremi/Ldo.wav' ) 
 	{
 		z = 'Ldo';
 	}
 	else if (url == 'doremi/re.wav' ) 
 	{
 		z = 're';
 	}
 	else if (url == 'doremi/mi.wav') 
 	{
 		z = 'mi';
 	}
 	else if (url == 'doremi/fa.wav') 
 	{
 		z = 'fa';
 	}
 	else if (url == 'doremi/sol.wav') 
 	{
 		z = 'sol';
 	}
 	else if (url == 'doremi/la.wav' ) 
 	{
 		z = 'la';
 	}
 	else if (url == 'doremi/si.wav' ) 
 	{
 		z = 'si';
 	}
 	else if (url == 'doremi/Hdo.wav') 
 	{
 		z = 'Hdo';
 	}	
	 console.log(z);
 	return z;
	    
 }


//---- FOR 3 SHAPES ----
 function startGame3Shapes($level,$firstSound,$secondSound,$thirdSound,$qs,$answerSound1,$answerSound2)
 {


 		var sPat = [$answerSound1,$answerSound2];
 		
 		$('#'+$level+'animate').click(function()
		{
			$firstSound.pause();
	 		$secondSound.pause();
	 		$thirdSound.pause();

			$firstSound.currentTime = 0;
	 		$secondSound.currentTime = 0;
	 		$thirdSound.currentTime = 0;
	 		$('#'+$level+'s1').addClass('disabled');
	 		$('#'+$level+'s2').addClass('disabled');
	 		$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'animate').addClass('locked');

			$('#'+$level+'s1').effect('shake','slow').promise($firstSound.play()).done(function()
			{

				$('#'+$level+'s2').effect('shake','slow').promise($secondSound.play()).done(function()
					{
						$('#'+$level+'s3').effect('shake','slow').promise($thirdSound.play()).done(function()
						{
									$qs.play();
									$($qs).on("ended", function()
									{
										sPat[0].play();

										$(sPat[0]).on("ended", function()
										{

											sPat[1].play();
											
										$(sPat[1]).on("ended", function()
										{
											
											
											sPat[0].currentTime = 0;
											sPat[1].currentTime = 0;
											
											sPat[0].pause();
											sPat[1].pause();
											$('#'+$level+'s1').removeClass('disabled');
									 		$('#'+$level+'s2').removeClass('disabled');
									 		$('#'+$level+'s3').removeClass('disabled');
											
											ready = true;

										});
													
										
										});
									});	
							
						});

						
					});
			});
		});
 }

 function get3RandomShapes($level,$firstSound,$secondSound,$thirdSound,$soundPattern1,$soundPattern2)
 {
	 	var rshape1 = getRandomNumber(7,0);
	    var rshape2 = getRandomNumber(7,0);
	    var rshape3 = getRandomNumber(7,0);
	   	ready = false;
	   	

	    while(rshape2 == rshape1)
	    {
	    	rshape2 = getRandomNumber(7,0);
	     }
	    while(rshape3 == rshape1 || rshape3 == rshape2)
	    {
	    	rshape3 = getRandomNumber(7,0);
	    }

	    var sh1 = shapes[rshape1];
	    var sh2 = shapes[rshape2];
	    var sh3 = shapes[rshape3];

	   $('#'+$level+'s1').css({'background-image': 'url(' + sh1 + ')' });
	   $('#'+$level+'s2').css({'background-image': 'url(' + sh2 + ')' });
	   $('#'+$level+'s3').css({'background-image': 'url(' + sh3 + ')' });

	  

	   	var currentPlace = 1;
	    var moves = 2 ;	    


		$('#'+$level+'s1').click(function()
		{
			
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s2').addClass('disabled');
			$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'check').addClass('disabled');

			$firstSound.currentTime = 0;

			$(this).effect('shake','slow').promise($firstSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s2').removeClass('disabled');
					$('#'+$level+'s3').removeClass('disabled');
					$('#'+$level+'check').removeClass('disabled');
				});
			
		if (ready)
			{



				var answer = srcToTxt($firstSound);
				$('#' + $level + currentPlace).text(answer);
				$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh1 + ')' });
				$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
				$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh1 + ')' });
				
				if (currentPlace == 1)
				{	
					answerArray.push($firstSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($firstSound);
					answerArray.push(nextSound);
				}
				currentPlace++;
				moves--;

				if (moves == 0 )
				{
					$('#'+$level+'check').removeClass('locked');
				}

				check();


			}

		});

		$('#'+$level+'s2').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s1').addClass('disabled');
			$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'check').addClass('disabled');

			$secondSound.currentTime = 0;
			$(this).effect('shake','slow').promise($secondSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s1').removeClass('disabled');
					$('#'+$level+'s3').removeClass('disabled');
					$('#'+$level+'check').removeClass('disabled');
				});
		//	$($secondSound).on("ended",function()
		//	{
		//		$firstSound.pause();
		//		$thirdSound.pause();
		//	});
		if (ready)
			{
				var answer = srcToTxt($secondSound);
				$('#' + $level + currentPlace).text(answer);
				$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh2 + ')' });
				$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
				$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh2 + ')' });
				if (currentPlace == 1)
				{	
					answerArray.push($secondSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($secondSound);
					answerArray.push(nextSound);
				}

				currentPlace++;
				moves--;

				if (moves == 0 )
				{
					$('#'+$level+'check').removeClass('locked');
				}

				check();
			}

		});

		$('#'+$level+'s3').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s2').addClass('disabled');
			$('#'+$level+'s1').addClass('disabled');
			$('#'+$level+'check').addClass('disabled');

			$thirdSound.currentTime = 0;
			$(this).effect('shake','slow').promise($thirdSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s2').removeClass('disabled');
					$('#'+$level+'s1').removeClass('disabled');
					$('#'+$level+'check').removeClass('disabled');
				});
		//	$($thirdSound).on("ended",function()
		//	{
		//		$secondSound.pause();
		//		$firstSound.pause();
		//	});
		if (ready)
			{
				var answer = srcToTxt($thirdSound);
				$('#' + $level + currentPlace).text(answer);
				$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh3 + ')' });
				$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
				$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh3 + ')' });
				
				if (currentPlace == 1)
				{	
					answerArray.push($thirdSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($thirdSound);
					answerArray.push(nextSound);
				}

				currentPlace++;
				moves--;

				if (moves == 0 )
				{
					$('#'+$level+'check').removeClass('locked');
				}

				check();
			}

		});



		$('#'+$level+'retry').click(function()
		{

			count_retry();

			$('.'+$level+'w1').css('background-image', 'none');
			$('.'+$level+'w2').css('background-image', 'none');

			window.location.href = '#'+$level;
			location.reload(true);

		});

		function check()
		{

			if(moves == 0)
			{
				
				$('#'+$level+'s1').addClass('noevent');
				$('#'+$level+'s2').addClass('noevent');
				$('#'+$level+'s3').addClass('noevent');

				console.log($('#'+$level+'s1').attr('class'));
			}
		}

		$('#'+$level+'check').click(function()
		{
			$(this).addClass('disabled');

			$firstSound.pause();
	 		$secondSound.pause();
	 		$thirdSound.pause();

			$firstSound.currentTime = 0;
			$secondSound.currentTime = 0;
			$thirdSound.currentTime = 0;

			checkAnswer3Shapes($level,$soundPattern1,$soundPattern2);


		});	

 }

function get3RandomSounds($firstSound,$secondSound,$thirdSound)
{
		var arrSounds = [$firstSound , $secondSound , $thirdSound];
	    
	    var rsound1 = getRandomNumber(2,0);
	    var rsound2 = getRandomNumber(2,0);
	    var rsound3 = getRandomNumber(2,0);
	   	
	    while(rsound2 == rsound1)
	    {
	    	rsound2 = getRandomNumber(2,0);
	    }

	    while(rsound3 == rsound1 || rsound3 == rsound2)
	    {
	    	rsound3 = getRandomNumber(2,0);
	    }

	    var rs1 = arrSounds[rsound1];
	    var rs2 = arrSounds[rsound2];
	    var rs3 = arrSounds[rsound3];

	    return [rs1,rs2,rs3];
}



//---- FOR 3 SHAPES END ----




//---- FOR 5 SHAPES ------

 function startGame5Shapes($level,$firstSound,$secondSound,$thirdSound,$fourthSound,$fifthSound,$qs,$answerSound1,$answerSound2,$answerSound3)
 {
 		var sPat = [$answerSound1,$answerSound2,$answerSound3];
 		
 		$('#'+$level+'animate').click(function()
		{
			$firstSound.pause();
	 		$secondSound.pause();
	 		$thirdSound.pause();
	 		$fourthSound.pause();
	 		$fifthSound.pause();


			$firstSound.currentTime = 0;
	 		$secondSound.currentTime = 0;
	 		$thirdSound.currentTime = 0;
	 		$fourthSound.currentTime = 0;
	 		$fifthSound.currentTime = 0;
	 		$('#'+$level+'s1').addClass('disabled');
	 		$('#'+$level+'s2').addClass('disabled');
	 		$('#'+$level+'s3').addClass('disabled');
	 		$('#'+$level+'s4').addClass('disabled');
	 		$('#'+$level+'s5').addClass('disabled');
			$('#'+$level+'animate').addClass('locked');

			$('#'+$level+'s1').effect('shake','slow').promise($firstSound.play()).done(function()
			{

				$('#'+$level+'s2').effect('shake','slow').promise($secondSound.play()).done(function()
					{
						$('#'+$level+'s3').effect('shake','slow').promise($thirdSound.play()).done(function()
						{
							$('#'+$level+'s4').effect('shake','slow').promise($fourthSound.play()).done(function()
							{
								$('#'+$level+'s5').effect('shake','slow').promise($fifthSound.play()).done(function()
								{
											
											$qs.play();
											$($qs).on("ended", function()
											{
												sPat[0].play();

												$(sPat[0]).on("ended", function()
												{
													
													sPat[1].play();
													
													$(sPat[1]).on("ended", function()
													{

														sPat[2].play();

														$(sPat[2]).on("ended", function()
														{	

																
																sPat[0].currentTime = 0;
																sPat[1].currentTime = 0;
																sPat[2].currentTime = 0;
																
																sPat[0].pause();
																sPat[1].pause();
																sPat[2].pause();
																$('#'+$level+'s1').removeClass('disabled');
														 		$('#'+$level+'s2').removeClass('disabled');
														 		$('#'+$level+'s3').removeClass('disabled');
														 		$('#'+$level+'s4').removeClass('disabled');
														 		$('#'+$level+'s5').removeClass('disabled');
																
																ready = true;
																					
																
														});
													});
												});
											});
								});	
							});
						});

						
					});
			});
		});
 }

 function get5RandomShapes($level,$firstSound,$secondSound,$thirdSound,$fourthSound,$fifthSound,$soundPattern1,$soundPattern2,$soundPattern3)
 {
	 	var rshape1 = getRandomNumber(7,0);
	    var rshape2 = getRandomNumber(7,0);
	    var rshape3 = getRandomNumber(7,0);
	    var rshape4 = getRandomNumber(7,0);
	    var rshape5 = getRandomNumber(7,0);
	   	ready = false;
	   	

	 

	    while(rshape2 == rshape1)
	    {
	    	rshape2 = getRandomNumber(7,0);
	     }
	    while(rshape3 == rshape1 || rshape3 == rshape2)
	    {
	    	rshape3 = getRandomNumber(7,0);
	    }
	    while(rshape4 == rshape1 || rshape4 == rshape2 || rshape4 == rshape3)
	    {
	    	rshape4 = getRandomNumber(7,0);
	    }
	    while(rshape5 == rshape1 || rshape5 == rshape2 || rshape5 == rshape3 || rshape5 == rshape4)
	    {
	    	rshape5 = getRandomNumber(7,0);
	    }



	    var sh1 = shapes[rshape1];
	    var sh2 = shapes[rshape2];
	    var sh3 = shapes[rshape3];
	    var sh4 = shapes[rshape4];
	    var sh5 = shapes[rshape5];


	   $('#'+$level+'s1').css({'background-image': 'url(' + sh1 + ')' });
	   $('#'+$level+'s2').css({'background-image': 'url(' + sh2 + ')' });
	   $('#'+$level+'s3').css({'background-image': 'url(' + sh3 + ')' });
	   $('#'+$level+'s4').css({'background-image': 'url(' + sh4 + ')' });
	   $('#'+$level+'s5').css({'background-image': 'url(' + sh5 + ')' });



	   	var currentPlace = 1;
	    var moves = 3 ;	    


		$('#'+$level+'s1').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s2').addClass('disabled');
			$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'s4').addClass('disabled');
			$('#'+$level+'s5').addClass('disabled');
			$firstSound.currentTime = 0;
			$(this).effect('shake','slow').promise($firstSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s2').removeClass('disabled');
					$('#'+$level+'s3').removeClass('disabled');
					$('#'+$level+'s4').removeClass('disabled');
					$('#'+$level+'s5').removeClass('disabled');
				});
		if (ready)
			{

				var answer = srcToTxt($firstSound);
				$('#' + $level + currentPlace).text(answer);
				$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh1 + ')' });
				$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
				$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh1 + ')' });
				if (currentPlace == 1)
				{	
					answerArray.push($firstSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($firstSound);
					answerArray.push(nextSound);
				}
				else if (currentPlace == 3)
				{
					var nextSound = checkDuplicate($firstSound);
					answerArray.push(nextSound);	
				}

				currentPlace++;
				moves--;

				if (moves == 0 )
		        {
		          $('#'+$level+'check').removeClass('locked');
		        }

				
				check();
			}

		});

		$('#'+$level+'s2').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s1').addClass('disabled');
			$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'s4').addClass('disabled');
			$('#'+$level+'s5').addClass('disabled');
			$secondSound.currentTime = 0;
			$(this).effect('shake','slow').promise($secondSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s1').removeClass('disabled');
					$('#'+$level+'s3').removeClass('disabled');
					$('#'+$level+'s4').removeClass('disabled');
					$('#'+$level+'s5').removeClass('disabled');
				});
		if (ready)
			{
			var answer = srcToTxt($secondSound);
			$('#' + $level + currentPlace).text(answer);
			$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh2 + ')' });
			$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
			$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh2 + ')' });
			if (currentPlace == 1)
				{	
					answerArray.push($secondSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($secondSound);
					answerArray.push(nextSound);
				}
				else if (currentPlace == 3)
				{
					var nextSound = checkDuplicate($secondSound);
					answerArray.push(nextSound);	
				}
			currentPlace++;
			moves--;

			if (moves == 0 )
		        {
		          $('#'+$level+'check').removeClass('locked');
		        }

			
			check();
			}

		});

		$('#'+$level+'s3').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s1').addClass('disabled');
			$('#'+$level+'s2').addClass('disabled');
			$('#'+$level+'s4').addClass('disabled');
			$('#'+$level+'s5').addClass('disabled');
			$thirdSound.currentTime = 0;
			$(this).effect('shake','slow').promise($thirdSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s1').removeClass('disabled');
					$('#'+$level+'s2').removeClass('disabled');
					$('#'+$level+'s4').removeClass('disabled');
					$('#'+$level+'s5').removeClass('disabled');
				});
		if (ready)
		{
			var answer = srcToTxt($thirdSound);
			$('#' + $level + currentPlace).text(answer);
			$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh3 + ')' });
			$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
			$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh3 + ')' });
			if (currentPlace == 1)
				{	
					answerArray.push($thirdSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($thirdSound);
					answerArray.push(nextSound);
				}
				else if (currentPlace == 3)
				{
					var nextSound = checkDuplicate($thirdSound);
					answerArray.push(nextSound);	
				}
			currentPlace++;
			moves--;

			if (moves == 0 )
		        {
		          $('#'+$level+'check').removeClass('locked');
		        }

			
			check();
		}

		});

		$('#'+$level+'s4').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s1').addClass('disabled');
			$('#'+$level+'s2').addClass('disabled');
			$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'s5').addClass('disabled');
			$fourthSound.currentTime = 0;
			$(this).effect('shake','slow').promise($fourthSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s1').removeClass('disabled');
					$('#'+$level+'s2').removeClass('disabled');
					$('#'+$level+'s3').removeClass('disabled');
					$('#'+$level+'s5').removeClass('disabled');
				});
		if (ready)
		{
			var answer = srcToTxt($fourthSound);
			$('#' + $level + currentPlace).text(answer);
			$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh4 + ')' });
			$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
			$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh4 + ')' });
			if (currentPlace == 1)
				{	
					answerArray.push($fourthSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($fourthSound);
					answerArray.push(nextSound);
				}
				else if (currentPlace == 3)
				{
					var nextSound = checkDuplicate($fourthSound);
					answerArray.push(nextSound);	
				}
			currentPlace++;
			moves--;

			if (moves == 0 )
		        {
		          $('#'+$level+'check').removeClass('locked');
		        }

			
			check();
		}

		});

		$('#'+$level+'s5').click(function()
		{
			$('#'+$level+'animate').addClass('disabled');
			$('#'+$level+'s1').addClass('disabled');
			$('#'+$level+'s2').addClass('disabled');
			$('#'+$level+'s3').addClass('disabled');
			$('#'+$level+'s4').addClass('disabled');
			$fifthSound.currentTime = 0;
			$(this).effect('shake','slow').promise($fifthSound.play()).done(function()
				{
					$('#'+$level+'animate').removeClass('disabled');
					$('#'+$level+'s1').removeClass('disabled');
					$('#'+$level+'s2').removeClass('disabled');
					$('#'+$level+'s3').removeClass('disabled');
					$('#'+$level+'s4').removeClass('disabled');
				});
		if (ready)
		{	
			

			var answer = srcToTxt($fifthSound);
			$('#' + $level + currentPlace).text(answer);
			$('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh5 + ')' });
			$('.'+$level+'w' + currentPlace).addClass('shapeStyle');
			$('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh5 + ')' });
			if (currentPlace == 1)
				{	
					answerArray.push($fifthSound);
				}
				else if (currentPlace == 2) 
				{
					var nextSound = checkDuplicate($fifthSound);
					answerArray.push(nextSound);
				}
				else if (currentPlace == 3)
				{
					var nextSound = checkDuplicate($fifthSound);
					answerArray.push(nextSound);	
				}
			currentPlace++;
			moves--;

			if (moves == 0 )
		        {
		          $('#'+$level+'check').removeClass('locked');
		        }

			
			check();
		}

		});


		$('#'+$level+'retry').click(function()
		{
			count_retry();

			$('.'+$level+'w1').css('background-image', 'none');
			$('.'+$level+'w2').css('background-image', 'none');
			$('.'+$level+'w3').css('background-image', 'none');

			window.location.href = '#'+$level;
			location.reload(true);

		});

		function check()
		{

			if(moves == 0)
			{

				$('#'+$level+'s1').addClass('noevent');
				$('#'+$level+'s2').addClass('noevent');
				$('#'+$level+'s3').addClass('noevent');
				$('#'+$level+'s4').addClass('noevent');
				$('#'+$level+'s5').addClass('noevent');

			}
		}

		$('#'+$level+'check').click(function()
		{
			$(this).addClass('disabled');

			$firstSound.pause();
	 		$secondSound.pause();
	 		$thirdSound.pause();
	 		$fourthSound.pause();
	 		$fifthSound.pause();

			$firstSound.currentTime = 0;
			$secondSound.currentTime = 0;
			$thirdSound.currentTime = 0;
			$fourthSound.currentTime = 0;
			$fifthSound.currentTime = 0;

			checkAnswer5Shapes($level,$soundPattern1,$soundPattern2,$soundPattern3);


		});	

 }

function get5RandomSounds($firstSound,$secondSound,$thirdSound,$fourthSound,$fifthSound)
{
		var arrSounds = [$firstSound , $secondSound , $thirdSound,$fourthSound,$fifthSound];
	    
	    var rsound1 = getRandomNumber(4,0);
	    var rsound2 = getRandomNumber(4,0);
	    var rsound3 = getRandomNumber(4,0);
	    var rsound4 = getRandomNumber(4,0);
	    var rsound5 = getRandomNumber(4,0);

	   	
	    while(rsound2 == rsound1)
	    {
	    	rsound2 = getRandomNumber(4,0);
	    }

	    while(rsound3 == rsound1 || rsound3 == rsound2)
	    {
	    	rsound3 = getRandomNumber(4,0);
	    }
	    while(rsound4 == rsound1 || rsound4 == rsound2 || rsound4 == rsound3)
	    {
	    	rsound4 = getRandomNumber(4,0);
	    }
	    while(rsound5 == rsound1 || rsound5 == rsound2 || rsound5 == rsound3 || rsound5 == rsound4)
	    {
	    	rsound5 = getRandomNumber(4,0);
	    }

	    var rs1 = arrSounds[rsound1];
	    var rs2 = arrSounds[rsound2];
	    var rs3 = arrSounds[rsound3];
	    var rs4 = arrSounds[rsound4];
	    var rs5 = arrSounds[rsound5];

	    return [rs1,rs2,rs3,rs4,rs5];
}


//------ FOR 5 SHAPES END --------









//---- FOR 8 SHAPES ------

 function startGame8Shapes($level,$firstSound,$secondSound,$thirdSound,$fourthSound,$fifthSound,$sixthSound,$seventhSound,$eightSound
 	,$qs,$answerSound1,$answerSound2,$answerSound3,$answerSound4,$answerSound5)
 {
 		var sPat = [$answerSound1,$answerSound2,$answerSound3,$answerSound4,$answerSound5];
 		

 		$('#'+$level+'animate').click(function()
		{
			$firstSound.pause();
	 		$secondSound.pause();
	 		$thirdSound.pause();
	 		$fourthSound.pause();
	 		$fifthSound.pause();
	 		$sixthSound.pause();
	 		$seventhSound.pause();
	 		$eightSound.pause();

			$firstSound.currentTime = 0;
	 		$secondSound.currentTime = 0;
	 		$thirdSound.currentTime = 0;
	 		$fourthSound.currentTime = 0;
	 		$fifthSound.currentTime = 0;
	 		$sixthSound.currentTime = 0;
	 		$seventhSound.currentTime = 0;
	 		$eightSound.currentTime = 0;
	 		$('#'+$level+'s1').addClass('disabled');
	 		$('#'+$level+'s2').addClass('disabled');
	 		$('#'+$level+'s3').addClass('disabled');
	 		$('#'+$level+'s4').addClass('disabled');
	 		$('#'+$level+'s5').addClass('disabled');
	 		$('#'+$level+'s6').addClass('disabled');
	 		$('#'+$level+'s7').addClass('disabled');
	 		$('#'+$level+'s8').addClass('disabled');
			$('#'+$level+'animate').addClass('locked');
			$('#'+$level+'s1').effect('shake','slow').promise($firstSound.play()).done(function()
			{

				$('#'+$level+'s2').effect('shake','slow').promise($secondSound.play()).done(function()
					{
						$('#'+$level+'s3').effect('shake','slow').promise($thirdSound.play()).done(function()
						{
							$('#'+$level+'s4').effect('shake','slow').promise($fourthSound.play()).done(function()
							{
								$('#'+$level+'s5').effect('shake','slow').promise($fifthSound.play()).done(function()
								{

									$('#'+$level+'s6').effect('shake','slow').promise($sixthSound.play()).done(function()
									{

										$('#'+$level+'s7').effect('shake','slow').promise($seventhSound.play()).done(function()
										{

											$('#'+$level+'s8').effect('shake','slow').promise($eightSound.play()).done(function()
											{
											
														$qs.play();
														$($qs).on("ended", function()
														{
															sPat[0].play();

															$(sPat[0]).on("ended", function()
															{
																
																sPat[1].play();
																
																$(sPat[1]).on("ended", function()
																{

																		sPat[2].play();

																		$(sPat[2]).on("ended", function()
																		{
																			sPat[3].play();

																			$(sPat[3]).on("ended", function()
																			{
																				sPat[4].play();

																				$(sPat[4]).on("ended", function()
																				{	

																						
																						
																						sPat[0].currentTime = 0;
																						sPat[1].currentTime = 0;
																						sPat[2].currentTime = 0;
																						sPat[3].currentTime = 0;
																						sPat[4].currentTime = 0;				
																				
																						sPat[0].pause();
																						sPat[1].pause();
																						sPat[2].pause();
																						sPat[3].pause();
																						sPat[4].pause();
																						$('#'+$level+'s1').removeClass('disabled');
																				 		$('#'+$level+'s2').removeClass('disabled');
																				 		$('#'+$level+'s3').removeClass('disabled');
																				 		$('#'+$level+'s4').removeClass('disabled');
																				 		$('#'+$level+'s5').removeClass('disabled');
																				 		$('#'+$level+'s6').removeClass('disabled');
																				 		$('#'+$level+'s7').removeClass('disabled');
																				 		$('#'+$level+'s8').removeClass('disabled');
																						
																						ready = true;

																				});
																			});
																		});
																});
															});
														});
											});
										});
									});
								});	
							});
						});

						
					});
			});
		});
 }

 function get8RandomShapes($level,$firstSound,$secondSound,$thirdSound,$fourthSound,$fifthSound,$sixthSound,$seventhSound,$eightSound
  ,$soundPattern1,$soundPattern2,$soundPattern3,$soundPattern4,$soundPattern5)
 {
     var rshape1 = getRandomNumber(7,0);
      var rshape2 = getRandomNumber(7,0);
      var rshape3 = getRandomNumber(7,0);
      var rshape4 = getRandomNumber(7,0);
      var rshape5 = getRandomNumber(7,0);
      var rshape6 = getRandomNumber(7,0);
      var rshape7 = getRandomNumber(7,0);
      var rshape8 = getRandomNumber(7,0);
      
      ready = false;

    

      while(rshape2 == rshape1)
      {
        rshape2 = getRandomNumber(7,0);
       }
      while(rshape3 == rshape1 || rshape3 == rshape2)
      {
        rshape3 = getRandomNumber(7,0);
      }
      while(rshape4 == rshape1 || rshape4 == rshape2 || rshape4 == rshape3)
      {
        rshape4 = getRandomNumber(7,0);
      }
      while(rshape5 == rshape1 || rshape5 == rshape2 || rshape5 == rshape3 || rshape5 == rshape4)
      {
        rshape5 = getRandomNumber(7,0);
      }
      while(rshape6 == rshape1 || rshape6 == rshape2 || rshape6 == rshape3 || rshape6 == rshape4 || rshape6 == rshape5)
      {
        rshape6 = getRandomNumber(7,0);
      }
      while(rshape7 == rshape1 || rshape7 == rshape2 || rshape7 == rshape3 || rshape7 == rshape4 || rshape7 == rshape5 || rshape7 == rshape6)
      {
        rshape7 = getRandomNumber(7,0);
      }
      while(rshape8 == rshape1 || rshape8 == rshape2 || rshape8 == rshape3 || rshape8 == rshape4 || rshape8 == rshape5 || rshape8 == rshape6 || rshape8 == rshape7)
      {
        rshape8 = getRandomNumber(7,0);
      }



      var sh1 = shapes[rshape1];
      var sh2 = shapes[rshape2];
      var sh3 = shapes[rshape3];
      var sh4 = shapes[rshape4];
      var sh5 = shapes[rshape5];
      var sh6 = shapes[rshape6];
      var sh7 = shapes[rshape7];
      var sh8 = shapes[rshape8];


     $('#'+$level+'s1').css({'background-image': 'url(' + sh1 + ')' });
     $('#'+$level+'s2').css({'background-image': 'url(' + sh2 + ')' });
     $('#'+$level+'s3').css({'background-image': 'url(' + sh3 + ')' });
     $('#'+$level+'s4').css({'background-image': 'url(' + sh4 + ')' });
     $('#'+$level+'s5').css({'background-image': 'url(' + sh5 + ')' });
     $('#'+$level+'s6').css({'background-image': 'url(' + sh6 + ')' });
     $('#'+$level+'s7').css({'background-image': 'url(' + sh7 + ')' });
     $('#'+$level+'s8').css({'background-image': 'url(' + sh8 + ')' });


      var currentPlace = 1;
      var moves = 5 ;     


     $('#'+$level+'s1').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $firstSound.currentTime = 0;

      $(this).effect('shake','slow').promise($firstSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($firstSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh1 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh1 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($firstSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($firstSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($firstSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($firstSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($firstSound);
          answerArray.push(nextSound);
        }

        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });

    $('#'+$level+'s2').click(function()
   {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $secondSound.currentTime = 0;

      $(this).effect('shake','slow').promise($secondSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($secondSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh2 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh2 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($secondSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($secondSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($secondSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($secondSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($secondSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });

    $('#'+$level+'s3').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $thirdSound.currentTime = 0;

      $(this).effect('shake','slow').promise($thirdSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($thirdSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh3 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh3 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($thirdSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($thirdSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($thirdSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($thirdSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($thirdSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });

    $('#'+$level+'s4').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $fourthSound.currentTime = 0;

      $(this).effect('shake','slow').promise($fourthSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($fourthSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh4 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh4 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($fourthSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($fourthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($fourthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($fourthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($fourthSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });

    $('#'+$level+'s5').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $fifthSound.currentTime = 0;

      $(this).effect('shake','slow').promise($fifthSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($fifthSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh5 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh5 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($fifthSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($fifthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($fifthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($fifthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($fifthSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });


    $('#'+$level+'s6').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $sixthSound.currentTime = 0;

      $(this).effect('shake','slow').promise($sixthSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($sixthSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh6 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh6 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($sixthSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($sixthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($sixthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($sixthSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($sixthSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });

    $('#'+$level+'s7').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $seventhSound.currentTime = 0;

      $(this).effect('shake','slow').promise($seventhSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($seventhSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh7 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh7 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($seventhSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($seventhSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($seventhSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($seventhSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($seventhSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });

    $('#'+$level+'s8').click(function()
    {
      
     $('#'+$level+'animate').addClass('disabled');
      $('#'+$level+'s1').addClass('disabled');
      $('#'+$level+'s3').addClass('disabled');
      $('#'+$level+'s4').addClass('disabled');
      $('#'+$level+'s5').addClass('disabled');
      $('#'+$level+'s6').addClass('disabled');
      $('#'+$level+'s7').addClass('disabled');
      $('#'+$level+'s8').addClass('disabled');
      $('#'+$level+'check').addClass('disabled');

      $eightSound.currentTime = 0;

      $(this).effect('shake','slow').promise($eightSound.play()).done(function()
        {
          $('#'+$level+'animate').removeClass('disabled');
          $('#'+$level+'s1').removeClass('disabled');
          $('#'+$level+'s3').removeClass('disabled');
          $('#'+$level+'s4').removeClass('disabled');
          $('#'+$level+'s5').removeClass('disabled');
          $('#'+$level+'s6').removeClass('disabled');
          $('#'+$level+'s7').removeClass('disabled');
          $('#'+$level+'s8').removeClass('disabled');
          $('#'+$level+'check').removeClass('disabled');
        });
      
    if (ready)
      {



        var answer = srcToTxt($eightSound);
        $('#' + $level + currentPlace).text(answer);
        $('.'+$level+'w' + currentPlace).css({'background-image': 'url(' + sh8 + ')' });
        $('.'+$level+'w' + currentPlace).addClass('shapeStyle');
        $('#'+$level+'ans' + currentPlace).css({'background-image': 'url(' + sh8 + ')' });
        
        if (currentPlace == 1)
        { 
          answerArray.push($eightSound);
        }
        else if (currentPlace == 2) 
        {
          var nextSound = checkDuplicate($eightSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 3) 
        {
          var nextSound = checkDuplicate($eightSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 4) 
        {
          var nextSound = checkDuplicate($eightSound);
          answerArray.push(nextSound);
        }
        else if (currentPlace == 5) 
        {
          var nextSound = checkDuplicate($eightSound);
          answerArray.push(nextSound);
        }
        
        currentPlace++;
        moves--;

        if (moves == 0 )
        {
          $('#'+$level+'check').removeClass('locked');
        }

        check();


      }

    });


		$('#'+$level+'retry').click(function()
		{
			count_retry();
			$('.'+$level+'w1').css('background-image', 'none');
			$('.'+$level+'w2').css('background-image', 'none');
			$('.'+$level+'w3').css('background-image', 'none');
			$('.'+$level+'w4').css('background-image', 'none');
			$('.'+$level+'w5').css('background-image', 'none');

			window.location.href = '#'+$level;
			location.reload(true);

		});

		function check()
		{

			if(moves == 0)
			{

				$('#'+$level+'s1').addClass('noevent');
				$('#'+$level+'s2').addClass('noevent');
				$('#'+$level+'s3').addClass('noevent');
				$('#'+$level+'s4').addClass('noevent');
				$('#'+$level+'s5').addClass('noevent');
				$('#'+$level+'s6').addClass('noevent');
				$('#'+$level+'s7').addClass('noevent');
				$('#'+$level+'s8').addClass('noevent');
			}
		}

		$('#'+$level+'check').click(function()
		{
			$(this).addClass('disabled');

			$firstSound.pause();
	 		$secondSound.pause();
	 		$thirdSound.pause();
	 		$fourthSound.pause();
	 		$fifthSound.pause();
	 		$sixthSound.pause();
	 		$seventhSound.pause();
	 		$eightSound.pause();

			$firstSound.currentTime = 0;
			$secondSound.currentTime = 0;
			$thirdSound.currentTime = 0;
			$fourthSound.currentTime = 0;
			$fifthSound.currentTime = 0;
			$sixthSound.currentTime = 0;
			$seventhSound.currentTime = 0;
			$eightSound.currentTime = 0;

			checkAnswer8Shapes($level,$soundPattern1,$soundPattern2,$soundPattern3,$soundPattern4,$soundPattern5);


		});

 }

function get8RandomSounds($firstSound,$secondSound,$thirdSound,$fourthSound,$fifthSound,$sixthSound,$seventhSound,$eightSound)
{
		var arrSounds = [$firstSound , $secondSound , $thirdSound,$fourthSound,$fifthSound,$sixthSound,$seventhSound,$eightSound];
	    
	    var rsound1 = getRandomNumber(7,0);
	    var rsound2 = getRandomNumber(7,0);
	    var rsound3 = getRandomNumber(7,0);
	    var rsound4 = getRandomNumber(7,0);
	    var rsound5 = getRandomNumber(7,0);
	    var rsound6 = getRandomNumber(7,0);
	    var rsound7 = getRandomNumber(7,0);
	    var rsound8 = getRandomNumber(7,0);

	   	
	    while(rsound2 == rsound1)
	    {
	    	rsound2 = getRandomNumber(7,0);
	    }

	    while(rsound3 == rsound1 || rsound3 == rsound2)
	    {
	    	rsound3 = getRandomNumber(7,0);
	    }
	    while(rsound4 == rsound1 || rsound4 == rsound2 || rsound4 == rsound3)
	    {
	    	rsound4 = getRandomNumber(7,0);
	    }
	    while(rsound5 == rsound1 || rsound5 == rsound2 || rsound5 == rsound3 || rsound5 == rsound4)
	    {
	    	rsound5 = getRandomNumber(7,0);
	    }
	    while(rsound6 == rsound1 || rsound6 == rsound2 || rsound6 == rsound3 || rsound6 == rsound4 || rsound6 == rsound5)
	    {
	    	rsound6 = getRandomNumber(7,0);
	    }
	    while(rsound7 == rsound1 || rsound7 == rsound2 || rsound7 == rsound3 || rsound7 == rsound4 || rsound7 == rsound5 || rsound7 == rsound6)
	    {
	    	rsound7 = getRandomNumber(7,0);
	    }
	    while(rsound8 == rsound1 || rsound8 == rsound2 || rsound8 == rsound3 || rsound8 == rsound4 || rsound8 == rsound5 || rsound8 == rsound6 || rsound8 == rsound7)
	    {
	    	rsound8 = getRandomNumber(7,0);
	    }

	    var rs1 = arrSounds[rsound1];
	    var rs2 = arrSounds[rsound2];
	    var rs3 = arrSounds[rsound3];
	    var rs4 = arrSounds[rsound4];
	    var rs5 = arrSounds[rsound5];
	    var rs6 = arrSounds[rsound6];
	    var rs7 = arrSounds[rsound7];
	    var rs8 = arrSounds[rsound8];

	    return [rs1,rs2,rs3,rs4,rs5,rs6,rs7,rs8];
}


//------ FOR 8 SHAPES END --------


//-- ANIMATE ANSWERS --
 function checkAnswer3Shapes($level,$soundPattern1,$soundPattern2)
 {
 			var firstSound = answerArray[0];
 			var secondSound = answerArray[1];
 			var level_check  = parseInt($level.replace(/\D/g,''));
		
			$('#'+$level+'ans1').effect('shake','slow').promise(firstSound.play()).done(function()
			{	
						answerArray[0].pause();
						answerArray[1].pause();

						answerArray[0].currentTime = 0;
						answerArray[1].currentTime = 0;

				$('#'+$level+'ans2').effect('shake','slow').promise(secondSound.play()).done(function()
				{													
						
						answerArray[0].pause();
						answerArray[1].pause();

						answerArray[0].currentTime = 0;
						answerArray[1].currentTime = 0;
											
						
					if ( $('#'+$level+'1').text() == $soundPattern1 && $('#'+$level+'2').text() == $soundPattern2) 
					{
						
						var nl = parseInt($('#gameProgress').text());
						if (level_check >= nl)
						{
							window.localStorage.setItem("rain_current_level",++nl);
						}
						
						
					 	window.location.href='#'+$level+'nextlvl';
						

					}
					else
					{

							$('#'+$level+'1').text("1") ;
							$('#'+$level+'2').text("2") ;

							moves = 2;
							currentPlace=1;

							window.location.href='#'+$level+'wrong';
								
					}
											
						
				});
						
			});
		
 }

 function checkAnswer5Shapes($level,$soundPattern1,$soundPattern2,$soundPattern3)
 {
 			var firstSound = answerArray[0];
 			var secondSound = answerArray[1];
 			var thirdSound = answerArray[2];
 			var level_check  = parseInt($level.replace(/\D/g,''));
 		
		
			$('#'+$level+'ans1').effect('shake','slow').promise(firstSound.play()).done(function()
			{
							answerArray[0].currentTime = 0;
							answerArray[1].currentTime = 0;
							answerArray[2].currentTime = 0;
												
							answerArray[0].pause();
							answerArray[1].pause();
							answerArray[2].pause();
				$('#'+$level+'ans2').effect('shake','slow').promise(secondSound.play()).done(function()
				{	
							answerArray[0].currentTime = 0;
							answerArray[1].currentTime = 0;
							answerArray[2].currentTime = 0;
												
							answerArray[0].pause();
							answerArray[1].pause();
							answerArray[2].pause();

					$('#'+$level+'ans3').effect('shake','slow').promise(thirdSound.play()).done(function()
					{													
						
							answerArray[0].currentTime = 0;
							answerArray[1].currentTime = 0;
							answerArray[2].currentTime = 0;
												
							answerArray[0].pause();
							answerArray[1].pause();
							answerArray[2].pause();

							if ( $('#'+$level+'1').text() == $soundPattern1 && $('#'+$level+'2').text() == $soundPattern2 && $('#'+$level+'3').text() == $soundPattern3) 
							{
								var nl = parseInt($('#gameProgress').text());
								if (level_check >= nl)
								{
									window.localStorage.setItem("rain_current_level",++nl);
								}
							 	window.location.href='#'+$level+'nextlvl';
								

							}
							else
							{

									$('#'+$level+'1').text("1") ;
									$('#'+$level+'2').text("2") ;
									$('#'+$level+'3').text("3") ;

									moves = 3;
									currentPlace=1;

									window.location.href='#'+$level+'wrong';
										
							}
					});						
						
				});
						
			});
		
 }


 function checkAnswer8Shapes($level,$soundPattern1,$soundPattern2,$soundPattern3,$soundPattern4,$soundPattern5)
 {
 			console.log($soundPattern1+$soundPattern2+$soundPattern3+$soundPattern4 + $soundPattern5);
 			var firstSound = answerArray[0];
 			var secondSound = answerArray[1];
 			var thirdSound = answerArray[2];
 			var fourthSound = answerArray[3];
 			var fifthSound = answerArray[4];

 			var level_check  = parseInt($level.replace(/\D/g,''));
 		
		
			$('#'+$level+'ans1').effect('shake','slow').promise(firstSound.play()).done(function()
			{
										answerArray[0].currentTime = 0; answerArray[1].currentTime = 0;
										answerArray[2].currentTime = 0; answerArray[3].currentTime = 0;
										answerArray[4].currentTime = 0; answerArray[0].pause();
										answerArray[1].pause(); answerArray[2].pause();
										answerArray[3].pause(); answerArray[4].pause(); 
										
				$('#'+$level+'ans2').effect('shake','slow').promise(secondSound.play()).done(function()
				{
										answerArray[0].currentTime = 0; answerArray[1].currentTime = 0;
										answerArray[2].currentTime = 0; answerArray[3].currentTime = 0;
										answerArray[4].currentTime = 0; answerArray[0].pause();
										answerArray[1].pause(); answerArray[2].pause();
										answerArray[3].pause(); answerArray[4].pause(); 
										
					$('#'+$level+'ans3').effect('shake','slow').promise(thirdSound.play()).done(function()
					{
										answerArray[0].currentTime = 0; answerArray[1].currentTime = 0;
										answerArray[2].currentTime = 0; answerArray[3].currentTime = 0;
										answerArray[4].currentTime = 0; answerArray[0].pause();
										answerArray[1].pause(); answerArray[2].pause();
										answerArray[3].pause(); answerArray[4].pause(); 
										
						$('#'+$level+'ans4').effect('shake','slow').promise(fourthSound.play()).done(function()
						{					
										answerArray[0].currentTime = 0; answerArray[1].currentTime = 0;
										answerArray[2].currentTime = 0; answerArray[3].currentTime = 0;
										answerArray[4].currentTime = 0; answerArray[0].pause();
										answerArray[1].pause(); answerArray[2].pause();
										answerArray[3].pause(); answerArray[4].pause(); 
																		
									
							$('#'+$level+'ans5').effect('shake','slow').promise(fifthSound.play()).done(function()
							{		
										answerArray[0].currentTime = 0; answerArray[1].currentTime = 0;
										answerArray[2].currentTime = 0; answerArray[3].currentTime = 0;
										answerArray[4].currentTime = 0; answerArray[0].pause();
										answerArray[1].pause(); answerArray[2].pause();
										answerArray[3].pause(); answerArray[4].pause(); 
										

										
										
										
										

										if ( $('#'+$level+'1').text() == $soundPattern1 && $('#'+$level+'2').text() == $soundPattern2 
											&& $('#'+$level+'3').text() == $soundPattern3 && $('#'+$level+'4').text() == $soundPattern4 
											&& $('#'+$level+'5').text() == $soundPattern5) 
										{
											var nl = parseInt($('#gameProgress').text());
											if (level_check >= nl)
											{
												window.localStorage.setItem("rain_current_level",++nl);
											}
										 	window.location.href='#'+$level+'nextlvl';
											

										}
										else
										{

												$('#'+$level+'1').text("1") ;
												$('#'+$level+'2').text("2") ;
												$('#'+$level+'3').text("3") ;
												$('#'+$level+'4').text("4") ;
												$('#'+$level+'5').text("5") ;

												moves = 5;
												currentPlace=1;

												window.location.href='#'+$level+'wrong';
													
										}
							});
						});
					});						
						
				});
						
			});
		
 }


//-- ANIMATE ANSWERS END --

function checkDuplicate($currentSound)
{
	var newSound;
	if ($currentSound == soundLdo)
	{
		newSound = soundLdo2;
	}
	else if ($currentSound == soundRe)
	{
		newSound = soundRe2;
	}
	else if ($currentSound == soundMi)
	{
		newSound = soundMi2;
	}
	else if ($currentSound == soundFa)
	{
		newSound = soundFa2;
	}
	else if ($currentSound == soundSol)
	{
		newSound = soundSol2;
	}
	else if ($currentSound == soundLa)
	{
		newSound = soundLa2;
	}
	else if ($currentSound == soundSi)
	{
		newSound = soundSi2;
	}
	else if ($currentSound == soundHdo)
	{
		newSound = soundHdo2;
	}
	else if ($currentSound == soundLdo2)
	{
		newSound == soundLdo3;
	}
	else if ($currentSound == soundRe2)
	{
		newSound == soundRe3;
	}
	else if ($currentSound == soundMi2)
	{
		newSound == soundMi3;
	}
	else if ($currentSound == soundFa2)
	{
		newSound == soundFa3;
	}
	else if ($currentSound == soundSol2)
	{
		newSound == soundSol3;
	}
	else if ($currentSound == soundLa2)
	{
		newSound == soundLa3;
	}
	else if ($currentSound == soundSi2)
	{
		newSound == soundSi3;
	}
	else if ($currentSound == soundHdo2)
	{
		newSound == soundHdo3;
	}

	return newSound;
}


function count_retry()
{
	var retries = window.localStorage.getItem("rain_num_ret");
	//parseInt(window.localStorage.getItem("num_ret"));
	

	if (retries == null || retries == NaN )
	{
		retries = 0;
		
	}
	else
	{
		//do nothing
	//	alert(retries);

	}

	
	window.localStorage.setItem("rain_num_ret",++retries);

//	alert("Retries = " + window.localStorage.getItem("rain_num_ret") );


}

function reload()
{
	
		window.location.reload();	
	
	
}

function showTutPage1()
{
	$('#tut_page-1').show();
	$('#tut_page-2').hide();
	$('#tut_page-3').hide();
	$('#tut_page-4').hide();
}

function showTutPage2()
{
	$('#tut_page-1').hide();
	$('#tut_page-2').show();
	$('#tut_page-3').hide();
	$('#tut_page-4').hide();
	
}

function showTutPage3()
{
	$('#tut_page-1').hide();
	$('#tut_page-2').hide();
	$('#tut_page-3').show();
	$('#tut_page-4').hide();
	
}

function showTutPage4()
{
	$('#tut_page-1').hide();
	$('#tut_page-2').hide();
	$('#tut_page-3').hide();
	$('#tut_page-4').show();
	
}

function skip()
{
	var q = confirm("Skip Tutorial?");
	if (q == true)
	{
		$('.tut_overlay').hide();
	}
	else
	{
		//do nothing
	}

	
}

function showLevel()
{
	var x = document.createElement("div");
	$(x).css({"border" : "1px solid black",
			  "width": "150px",
			  "height": "150px" ,
			  "z-index": 5000 });
}

function tutInit()
{
	$('.tut_overlay').show();
	$('#category').hide();
}