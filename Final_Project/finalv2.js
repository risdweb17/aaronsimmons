$(document).ready(function() {
	$(".slice").hide();
	$(".myface").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
       	$(".slice").fadeToggle("slow");
       	$(".slice2").hide();
       	$(".slice3").hide();
       	$(".slice4").hide();
       	$(".slice5").hide();
        $(".slice6").hide();
	});

	$(".slice2").hide();
	$(".myface2").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
       	$(".slice2").fadeToggle("slow");
       	$(".slice").hide();
       	$(".slice3").hide();
       	$(".slice4").hide();
       	$(".slice5").hide();
        $(".slice6").hide();
	});

	$(".slice3").hide();
	$(".myface3").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
       	$(".slice3").fadeToggle("slow");
       	$(".slice").hide();
       	$(".slice2").hide();
       	$(".slice4").hide();
       	$(".slice5").hide();
        $(".slice6").hide();
	});

	$(".slice4").hide();
	$(".myface4").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
       	$(".slice4").fadeToggle("slow");
       	$(".slice").hide();
       	$(".slice2").hide();
       	$(".slice3").hide();
       	$(".slice5").hide();
        $(".slice6").hide();
	});
	$(".slice5").hide();
	$(".myface5").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
       	$(".slice5").fadeToggle("slow");
       	$(".slice").hide();
       	$(".slice2").hide();
       	$(".slice3").hide();
       	$(".slice4").hide();
        $(".slice6").hide();
	});
  $(".slice6").hide();
  $(".myface6").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".slice6").fadeToggle("slow");
        $(".slice").hide();
        $(".slice2").hide();
        $(".slice3").hide();
        $(".slice4").hide();
        $(".slice5").hide();
  });
});

$(function() {

	// MENU ITEM 1 //

	$(".hovermenu").hide();
    $('.myface').hover(function() { 
        $('.hovermenu').fadeIn(200); 
    });
    $('.myface').mouseleave(function() {                  
        $('.hovermenu').fadeOut(100); 
    });

    // MENU ITEM 2 //

	$(".hovermenu2").hide();
    $('.myface2').hover(function() { 
        $('.hovermenu2').fadeIn(200); 
    });
    $('.myface2').mouseleave(function() {                  
        $('.hovermenu2').fadeOut(100); 
    });

    // MENU ITEM 3 //

	$(".hovermenu3").hide();
    $('.myface3').hover(function() { 
        $('.hovermenu3').fadeIn(200); 
    });
    $('.myface3').mouseleave(function() {                  
        $('.hovermenu3').fadeOut(100); 
    });

    // MENU ITEM 4 //

	$(".hovermenu4").hide();
    $('.myface4').hover(function() { 
        $('.hovermenu4').fadeIn(200); 
    });
    $('.myface4').mouseleave(function() {                  
        $('.hovermenu4').fadeOut(100); 
    });

    // MENU ITEM 5 //

	$(".hovermenu5").hide();
    $('.myface5').hover(function() { 
        $('.hovermenu5').fadeIn(200); 
    });
    $('.myface5').mouseleave(function() {                  
        $('.hovermenu5').fadeOut(100); 
    });

    $(".hovermenu6").hide();
    $('.myface6').hover(function() { 
        $('.hovermenu6').fadeIn(200); 
    });
    $('.myface6').mouseleave(function() {                  
        $('.hovermenu6').fadeOut(100); 
    });
});





// CLOCK //
// function setup() {

// 	var canvas = createCanvas(1200, 550);
// 	canvas.parent('clock');
// 	stroke(255);

// 	}

// 	function draw() {
// 	background(255,127,80);

// 	// THE CLOCK

// 	var s = map(second(), 0, 60, 0, 1200);

// 	var m = map(minute(), 0, 60, 0, 1200);

// 	var h = map(hour(), 0, 24, 0, 1200);

// 	fill(255);
// 	textSize(24);
// 	text("a linear series of lines denoting the movement of time", 300,500);


// 	//hour text
// 	textSize(24);
// 	text("hour", 10,250);

// 	//minute text
// 	textSize(24);
// 	text("min", 10,120);

// 	//second text
// 	textSize(24);
// 	text("sec", 10,30);

// 	// The hands of the clock
// 	fill(124,252,0);
	 
// 	rect(s, 0, s, 48);
// 	fill(186,85,211);

// 	rect(m, 50, m, 99);

// 	fill(255,69,0);
// 	rect(h, 200, h, 200);

// 	stroke(255);
// 	line(600,300,600,200);
// 	line(600,400,600,300);

// 	// Counting lines

// 	// hours
// 	stroke(240,55,68);
// 	line(100,300,100,200);
// 	line(200,300,200,200);
// 	line(300,300,300,200);
// 	line(400,300,400,200);
// 	line(500,300,500,200);

// 	line(700,300,700,200);
// 	line(800,300,800,200);
// 	line(900,300,900,200);
// 	line(1000,300,1000,200);
// 	line(1100,300,1100,200);
// 	line(1200,300,1200,200);

// 	// minutes at 12
// 	stroke(240,55,68);
// 	line(100,400,100,300);
// 	line(200,400,200,300);
// 	line(300,400,300,300);
// 	line(400,400,400,300);
// 	line(500,400,500,300);

// 	line(700,400,700,300);
// 	line(800,400,800,300);
// 	line(900,400,900,300);
// 	line(1000,400,1000,300);
// 	line(1100,400,1100,300);
// 	line(1200,400,1200,300);

// 	// minutes not at 12 markers
// 	stroke(50,230,68);

// 	//0
// 	line(20,400,20,300);
// 	line(40,400,40,300);
// 	line(60,400,60,300);
// 	line(80,400,80,300);

// 	//1
// 	line(120,400,120,300);
// 	line(140,400,140,300);
// 	line(160,400,160,300);
// 	line(180,400,180,300);

// 	//2
// 	line(220,400,220,300);
// 	line(240,400,240,300);
// 	line(260,400,260,300);
// 	line(280,400,280,300);

// 	//3
// 	line(320,400,320,300);
// 	line(340,400,340,300);
// 	line(360,400,360,300);
// 	line(380,400,380,300);

// 	//4
// 	line(420,400,420,300);
// 	line(440,400,440,300);
// 	line(460,400,460,300);
// 	line(480,400,480,300);

// 	//5
// 	line(520,400,520,300);
// 	line(540,400,540,300);
// 	line(560,400,560,300);
// 	line(580,400,580,300);

// 	//6
// 	line(620,400,620,300);
// 	line(640,400,640,300);
// 	line(660,400,660,300);
// 	line(680,400,680,300);

// 	//7
// 	line(720,400,720,300);
// 	line(740,400,740,300);
// 	line(760,400,760,300);
// 	line(780,400,780,300);
// 	print(h + ":" + m + ":" + s);

// 	//8
// 	line(820,400,820,300);
// 	line(840,400,840,300);
// 	line(860,400,860,300);
// 	line(880,400,880,300);

// 	//9
// 	line(920,400,920,300);
// 	line(940,400,940,300);
// 	line(960,400,960,300);
// 	line(980,400,980,300);

// 	//10
// 	line(1020,400,1020,300);
// 	line(1040,400,1040,300);
// 	line(1060,400,1060,300);
// 	line(1080,400,1080,300);

// 	//11
// 	line(1120,400,1120,300);
// 	line(1140,400,1140,300);
// 	line(1160,400,1160,300);
// 	line(1180,400,1180,300);

// 	//6
// 	line(620,400,620,300);
// 	line(640,400,640,300);
// 	line(660,400,660,300);
// 	line(680,400,680,300);

// 	//6
// 	line(620,400,620,300);
// 	line(640,400,640,300);
// 	line(660,400,660,300);
// 	line(680,400,680,300);
// 	}