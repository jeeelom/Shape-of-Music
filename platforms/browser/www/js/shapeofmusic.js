	$('document').ready(function()
	{

		var soundLdo = document.createElement('audio');
	    soundLdo.setAttribute('src', '../doremi/Ldo.wav');

	    var soundRe = document.createElement('audio');
	    soundRe.setAttribute('src', '../doremi/re.wav');

	    var soundMi = document.createElement('audio');
	    soundMi.setAttribute('src', '../doremi/mi.wav');

	    var soundFa = document.createElement('audio');
	    soundFa.setAttribute('src', '../doremi/fa.wav');

	    var soundSol = document.createElement('audio');
	    soundSol.setAttribute('src', '../doremi/sol.wav');

	    var soundLa = document.createElement('audio');
	    soundLa.setAttribute('src', '../doremi/la.wav');

	    var soundSi = document.createElement('audio');
	    soundSi.setAttribute('src', '../doremi/si.wav');

	    var soundHdo = document.createElement('audio');
	    soundHdo.setAttribute('src', '../doremi/Hdo.wav');

	    var currentPlace = 1;
	    var moves = 5 ;

		$('#Ldo').click(function()
		{

			soundLdo.currentTime = 0;
			soundLdo.play();
			$('.rrr' + currentPlace).text('Ldo');
			currentPlace++;
			moves--;
			check();

		});

		$('#re').click(function()
		{

			soundRe.currentTime = 0;
			soundRe.play();
			$('.rrr' + currentPlace).text('re');
			currentPlace++;
			moves--;
			check();

		});


		$('#mi').click(function()
		{

			soundMi.currentTime = 0;
			soundMi.play();
			$('.rrr' + currentPlace).text('mi');
			currentPlace++;
			moves--;
			check();

		});


		$('#fa').click(function()
		{

			soundFa.currentTime = 0;
			soundFa.play();
			$('.rrr' + currentPlace).text('fa');
			currentPlace++;
			moves--;
			check();

		});

		$('#sol').click(function()
		{

			soundSol.currentTime = 0;
			soundSol.play();
			$('.rrr' + currentPlace).text('sol');
			currentPlace++;
			moves--;
			check();

		});
		
		$('#la').click(function()
		{

			soundLa.currentTime = 0;
			soundLa.play();
			$('.rrr' + currentPlace).text('la');
			currentPlace++;
			moves--;
			check();

		});


		$('#si').click(function()
		{

			soundSi.currentTime = 0;
			soundSi.play();
			$('.rrr' + currentPlace).text('si');
			currentPlace++;
			moves--;
			check();


		});


		$('#Hdo').click(function()
		{

			soundHdo.currentTime = 0;
			soundHdo.play();
			$('.rrr' + currentPlace).text('Hdo');
			currentPlace++;
			moves--;
			check();
			

		});

function check()
{

	if(moves == 0)
	{

			if ( $('.rrr1').text() == "Ldo" && $('.rrr2').text() == "Ldo" && $('.rrr3').text() == "Ldo" && $('.rrr4').text() == "re" && $('.rrr5').text() == "mi") 
			{

				alert('Correct Proceed to the next level');
			}
			else
			{

					alert('Wrong Try Again');
					$('.rrr1').text("1") ;
					$('.rrr2').text("2") ;
					$('.rrr3').text("3") ;
					$('.rrr4').text("4") ;		
					$('.rrr5').text("5") ;
					moves = 5;
					currentPlace=1;
						
			}

	}
}

	});
