 //All my board questions
 // Sports
   //  'This team won the 2020 Nba Championship.', // The Milwaukee Bucks
   // 'This NBA Player and Coach has 11 NBA Titles, the most ever.', // Bill Russell
   // 'This football team just won the SuperBowl.', //  LA Rams
   // 'The Masters, "A Tradition Unlike Any Other," is played at this golf course.', //  Augusta National
 //// States
   // 'This State is home to the Space Needle', // Washington
   // 'This state is home to a famous strip', // Nevada
   // 'This state is famous for the cheese and beer', // Wisconsin
   // 'They say everything is bigger in this state', //Texas
   // 
 // Quick Maths
   // '10x9', //  90
   // 'This shape has 8 sides.', // an Octagon?
   // 'These are the first 5 prime numbers.', //   2, 3, 5, 7, 11
   // '2 to the 8th power' //  256
 // Disney/Pixar
   // 'Even miracles take a little time.', // Fairy Godmother from Cinderella?
   // 'Ohana means family. Family means no one gets left behind.', //  Lilo from Lilo and Stitch?
   // 'You\'re braver than you believe, and stronger than you seem, and smarter than you think.', //  Winnie the Pooh?
   // 'The problem is not the problem. The problem is your attitude about the problem.', //  is Jack Sparrow from Pirates of the Caribbean?


   //https://www.w3schools.com/howto/howto_js_toggle_class.asp
   //This code helps turn my tiles to active to make the box display
   const toggleActive = a => {
    if (a.className == 'tile active') {
        a.className = 'tile';
    } else {
        a.className = 'tile active';
      }
  }; 

  const plus1 = document.querySelector("#plus1"),
    minus1 = document.querySelector("#minus1"),
    plus2 = document.querySelector("#plus2"),
    minus2 = document.querySelector("#minus2"),
    score1 = document.querySelector(".scoreboardScore1")
    score2 = document.querySelector(".scoreboardScore2");

let a = 0;
plus.addEventListener("click", () => {
    a+= 100;
    score1.innerText = a;
    console.log(a);
});

minus.addEventListener("click", () => {
    a-= 100;
    score1.innerText = a;
    console.log(a);
});

 