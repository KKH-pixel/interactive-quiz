var quizQuestions = [
    {
        question: 'We are born with only two fears. What are they?',
        option1: 'Fear of spiders and fear of enclosed spaces', 
        option2: 'Fear of falling and fear of loud sounds', 
        option3: 'Fear of predators and fear of heights', 
        option4: 'Fear of enclosed spaces and fear of snakes',
        answer: 'Fear of falling and fear of loud sounds',
        funFact: 'Humans are born with only two innate fears, the fear of falling and the fear of loud sounds. Any other phobia you have is learned over time. Yes, even your crippling fear of spiders.'
    },
    {
        question: 'Ceasar Salad was invented in which country?',
        option1: 'England', 
        option2: 'America', 
        option3: 'Italy', 
        option4: 'Mexico',
        answer: 'Mexico',
        funFact: 'In 1924, Italian-American restaurateur Caesar Cardini first invented and served the Ceaser salad in Tijuana, Mexico, using nothing but whatever ingredients he had left after a July 4th rush. Yes, that place you associate with tequila. Which may not be a coincidence since the chef moved there to escape the confines of Prohibition and, since July 4th was being celebrated there, it seems many Americans followed suit.'
    },
    {
        question: 'What causes the most power outages in America?',
        option1: 'Weather incidents', 
        option2: 'Vehicles hitting power poles', 
        option3: 'Broken infrastructure', 
        option4: 'Squirrels',
        answer: 'Squirrels',
        funFact: 'The American Public Power Association (APPA) cites squirrels as the most frequent cause of power outages in the country. Squirrels cause problems by tunneling, chewing through electrical insulation, or becoming a current path between electrical conductors. So the next time you find yourself in the dark...blame a squirrel.'
    },
    {
        question: 'There are many fast-growing plants in the world, but only one that can be measured in miles per hour. Which plant is it?',
        option1: 'Bamboo', 
        option2: 'Acacia', 
        option3: 'Kudzu', 
        option4: 'Duckweed',
        answer: 'Bamboo',
        funFact: 'Bamboo is the fastest growing plant on the planet, capable of shooting up 35 inches each day at a rate of 0.00002 miles per hour.'
    },
    {
        question: 'Bubble wrap was originally intended to be:',
        option1: 'A stress relief tool', 
        option2: 'A toy for children', 
        option3: 'Wallpaper', 
        option4: 'Packing material',
        answer: 'Wallpaper',
        funFact: 'Bubble wrap was invented in 1957 by Alfred W. Fielding and Marc Chavannes. They sealed two shower curtains together, creating a smattering of air bubbles, which they initially tried to sell as a futuristic looking wallpaper. When they realized it had better use as a packing material they founded the Sealed Air Corporation in 1960 and their first big client, IBM, put them on the map. People have been popping bubbles ever since.'
    },
    {
        question: 'Humans are the only creatiure to have which body part?',
        option1: 'A chin', 
        option2: 'Nose hair', 
        option3: 'An appendix', 
        option4: 'Opposible thumbs',
        answer: 'A chin',
        funFact: 'The chin is defined as that little section of bone on the lower portion of the jaw that juts out past the teeth, and humans are the only known animal to have it. Scientists have no idea why.'
}]

var currentIndex = 0;
var questionEl = document.querySelector('#question');
var option1El = document.querySelector('.option1');
var option2El = document.querySelector('.option2');
var option3El = document.querySelector('.option3');
var option4El = document.querySelector('.option4');
var timeEl = document.querySelector('#time');
var secondsLeft = 60;
var answerButtons = document.querySelectorAll('.answers');
var startButton = document.getElementById('startButton');

console.log(questionEl)

function displayQuestion(){
    questionEl.textContent = quizQuestions[currentIndex].question
    option1El.textContent = quizQuestions[currentIndex].option1
    option2El.textContent = quizQuestions[currentIndex].option2
    option3El.textContent = quizQuestions[currentIndex].option3
    option4El.textContent = quizQuestions[currentIndex].option4
    console.log('displayQuestion ran')
    console.log(quizQuestions[currentIndex].question)
}

startButton.addEventListener('click', function(event){
    event.preventDefault();
    // document.querySelector('.startButton').style.display = 'none';
    setTime()
    displayQuestion()
    console.log('questions should show')
})



answerButtons.forEach(function(ansBtn){ 
    ansBtn.addEventListener('click', function(event){
        var userChoice = event.target.textContent
        console.log(userChoice)
        console.log(quizQuestions[currentIndex].answer)
        if (userChoice === quizQuestions[currentIndex].answer){
            console.log('Correct! Fun Fact: ' + quizQuestions[currentIndex].funFact)
            currentIndex++
            displayQuestion()
        } else {
            secondsLeft-=10
            console.log('That is incorrect.')
        }
    })
})

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        sendMessage(); 
      }
  
    }, 1000);
  }

  function gameEnd() {
      if (secondsLeft === 0) {

      }
  }

    

