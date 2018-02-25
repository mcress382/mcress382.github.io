var answers = ['Ayyyyyyy Lmao', 'LOL just LOL at you', 'Have you ever been so far as to decide to ever go look more like?', 'I dindu nuffin mane I swear!', 
'Try using a real 8 ball you puss', 'lmao I did not understand one word of that question', 'Who is this?', 'Try asking again with fewer words you geek',
 'You are really not that bright are you?', 'What kind of stupid question is that? ', 'Hit me baby one more time!', 'I am ugly and proud!', 
'Stop crying and fist yourself!', 'What do you mean you people?', 'I did not catch that. Learn 2 grammar', 'Lmfao Ayyyyyyyyy', 'Trolololololol', 'No', 
'That has to be the dumbest thing I have ever heard', 'How can mirrors be real if our eyes are not real?', 'Fist yourself!', 'covfefe!', ' just follow the spiders',
'.............', 'We are all just dust in the wind', 'Try asking again', '1v1 me bro', 'Come at me bro', 'If you believe hard enough all your dreams will come true...........LOL',
'Well they cannot cause you any more problems if they are dead....you nomsayin?', 'Do you even lift?', 'U wot m8?', "Don't you have to go be stupid somewhere else?", 
"It's magic you know never believe its not so", 'I will be glad to actually answer that for a measly price of bout tree fiddy', 'just lmfao', 
'If you walk barefoot through tree fiddy miles of broken glass you will achieve spiritual enlightement my young budda', 'No I am your father', 
'Are you aware that some people have medical conditions that cause them to be that way?', 'Did you just assume my gender?', 'Roads closed pizze boy find another way home!', 
'Keep asking I am sure you will get a real answer eventually', 'You might as well just give up dude', 'Your chance of failure is bout 350%', 'bout tree fiddy', 
'Life has no meaning', 'olololololo', 'Why do we drive on parkways and park on driveways?', 'I swear on me mums lyfe I will wrek u m8', 'How can our eyes be real if mirrors are not real?', 
'The snake says....SSSSSSSSSS', 'You seem like one of those emo non conformist types', 'random palendrome emordenlap modnar', 'Hit me on the ground'
 
  ];

function getItem(){
    document.getElementById("answerButton").innerHTML = answers[Math.floor(Math.random() * answers.length)];
	
}
