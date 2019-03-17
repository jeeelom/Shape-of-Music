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

     $('#'+$level+'s1').addClass('clouds');
     $('#'+$level+'s2').addClass('clouds');
     $('#'+$level+'s3').addClass('clouds');

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
    //  $($secondSound).on("ended",function()
    //  {
    //    $firstSound.pause();
    //    $thirdSound.pause();
    //  });
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
    //  $($thirdSound).on("ended",function()
    //  {
    //    $secondSound.pause();
    //    $firstSound.pause();
    //  });
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

     $('#'+$level+'s1').addClass('clouds');
     $('#'+$level+'s2').addClass('clouds');
     $('#'+$level+'s3').addClass('clouds');
     $('#'+$level+'s4').addClass('clouds');
     $('#'+$level+'s5').addClass('clouds');
     $('#'+$level+'s6').addClass('clouds');
     $('#'+$level+'s7').addClass('clouds');
     $('#'+$level+'s8').addClass('clouds');


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