$('document').ready(function()
	{

	// --- DEFINE SOUNDS ---
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

	// --- END DEFINE SOUNDS ---

//--------------ROW ROW ROW LEVEL 1 --------
	    var currentPlace = 1;
	    var moves = 2 ;


		$('#row_lvl_1_ldo').click(function()
		{

			soundLdo.currentTime = 0;
			$(this).effect('shake','slow').promise(soundLdo.play());
			$('#row_lvl_1_' + currentPlace).text('Ldo');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();


		});

		$('#row_lvl_1_re').click(function()
		{

			soundRe.currentTime = 0;
			$(this).effect('shake','slow').promise(soundRe.play());
			$('#row_lvl_1_' + currentPlace).text('re');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();

		});


		$('#row_lvl_1_mi').click(function()
		{

			soundMi.currentTime = 0;
			$(this).effect('shake','slow').promise(soundMi.play());
			$('#row_lvl_1_' + currentPlace).text('mi');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();

		});


		$('#fa').click(function()
		{

			soundFa.currentTime = 0;
			$(this).effect('shake','slow').promise(soundFa.play());
			$('.rrr' + currentPlace).text('fa');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();

		});

		$('#sol').click(function()
		{

			soundSol.currentTime = 0;
			$(this).effect('shake','slow').promise(soundSol.play());
			$('.rrr' + currentPlace).text('sol');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();

		});
		
		$('#la').click(function()
		{

			soundLa.currentTime = 0;
			$(this).effect('shake','slow').promise(soundLa.play());
			$('.rrr' + currentPlace).text('la');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();

		});


		$('#si').click(function()
		{

			soundSi.currentTime = 0;
			$(this).effect('shake','slow').promise(soundSi.play());
			$('.rrr' + currentPlace).text('si');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();
			


		});


		$('#Hdo').click(function()
		{

			soundHdo.currentTime = 0;
			$(this).effect('shake','slow').promise(soundHdo.play());
			$('.rrr' + currentPlace).text('Hdo');
			currentPlace++;
			moves--;
			$('.res').hide();
			check();
			

		});

		$('#animate').click(function()
		{
			$('#row_lvl_1_ldo').effect('shake','slow').promise(soundLdo.play()).done(function()
			{
				$('#row_lvl_1_re').effect('shake','slow').promise(soundRe.play()).done(function()
					{
						$('#row_lvl_1_mi').effect('shake','slow').promise(soundMi.play());
						
					})
			})
		});

	function check()
		{

			if(moves == 0)
			{

					if ( $('#row_lvl_1_1').text() == "Ldo" && $('#row_lvl_1_2').text() == "Ldo") 
					{

						$('.res').text('Correct Proceed to the next level');
						$('.res').css('background-color','lightgreen');
						$('.res').show();
						$('#nxt').show();
						

					}
					else
					{

							$('.res').text('Wrong Try Again');
							$('.res').css('background-color','red');
							$('.res').show();
							$('#row_lvl_1_1').text("1") ;
							$('#row_lvl_1_2').text("2") ;

							moves = 2;
							currentPlace=1;
								
					}

			}
		}	


//--------------ROW ROW ROW LEVEL 1 --------

});


