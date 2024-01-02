var quote = document.querySelector("#quote");
var author = document.querySelector("#author");
var generateButton = document.querySelector("#generateQuote");
var container = document.querySelector("#container");

const quotes = ["Christmas is like candy; it slowly melts in your mouth sweetening every taste bud, making you wish it could last forever.",
"Christmas is the season for kindling the fire of hospitality.",
"The best way to spread Christmas cheer is singing loud for all to hear.",
"I will honor Christmas in my heart, and try to keep it all the year.",
"Gifts of time and love are surely the basic ingredients of a truly merry Christmas.",
"Blessed is the season which engages the whole world in a conspiracy of love.",
"I like to compare the holiday season with the way a child listens to a favorite story. The pleasure is in the familiar way the story begins, the anticipation of familiar turns it takes, the familiar moments of suspense, and the familiar climax and ending.",
"Christmas Day is in our grasp, as long as we have hands to clasp! Christmas Day will always be, just as long, as we have we! Welcome Christmas while we stand, heart to heart, and hand in hand!",
"T’was the night before Christmas, when all through the house, not a creature was stirring, not even a mouse.",
"The earth has grown old with its burden of care, but at Christmas it always is young, the heart of the jewel burns lustrous and fair, and its soul full of music breaks the air, when the song of angels is sung.",

"Christmas gives us the opportunity to pause and reflect on the important things around us.",
"At Christmas, all roads lead home.",
"Christmas works like glue. It keeps us all sticking together.",
"One of the most glorious messes in the world is the mess created in the living room on Christmas Day. Don’t clean it up too quickly.",
"The best of all gifts around any Christmas tree: the presence of a happy family all wrapped up in each other.",
"As we struggle with shopping lists and invitations, compounded by December’s bad weather, it is good to be reminded that there are people in our lives who are worth this aggravation, and people to whom we are worth the same.",
"One of the most glorious messes in the world is the mess created in the living room on Christmas Day. Don’t clean it up too quickly.",
"Christmas is not as much about opening our presents as opening our hearts.",
"We count down the days just to experience it nearly exactly as we always have. It is so comfortable, familiar and perfectly nostalgic that, frankly, we have no desire to improve upon it at all.",
"I don’t think Christmas is necessarily about things. It’s about being good to one another, it’s about the Christian ethic, it’s about kindness.",
"When we remember a special Christmas, it is not the presents that made it special, but the laughter, the feeling of love, and the togetherness of friends and family that made that Christmas special.",

"Christmas is doing a little something extra for someone.",
"Christmas is the spirit of giving without a thought of getting. It is happiness because we see joy in people. It is forgetting self and finding time for others. It’s discarding the meaningless and stressing the true values.",
"Every time we love, every time we give, it’s Christmas.",
"When we recall Christmas past, we usually find that the simplest things – not the great occasions – give off the greatest glow of happiness.",
"As we give presents at Christmas, we need to recognize that sharing our time and ourselves is such an important part of giving.",
"Gifts of time and love are surely the basic ingredients of a truly merry Christmas.",
"Seeing is believing, but sometimes the most real things in the world are the things we can’t see.",
"Christmas magic is silent. You don’t hear it — you feel it, you know it, you believe it.",
"Christmas is a necessity. There has to be at least one day of the year to remind us that we’re here for something else besides ourselves.",
"Gifts of time and love are surely the basic ingredients of a truly merry Christmas.",
"The smells of Christmas are the smells of childhood.",

"The Christmas tree is a symbol of love, not money. There’s a kind of glory to them when they’re all lit up that exceeds anything all the money in the world could buy.",
"Let us keep Christmas beautiful without a thought of greed.",
"What is Christmas? It is tenderness for the past, courage for the present, hope for the future.",
"Like snowflakes, my Christmas memories gather and dance – each beautiful, unique, and gone too soon.",
"Peace on earth will come to stay, when we live Christmas every day.",
"He who has not Christmas in his heart will never find it under a tree.",
"We are better throughout the year for having, in spirit, become a child again at Christmastime.",
"Christmas is a season for kindling the fire for hospitality in the hall, the genial flame of charity in the heart.",
"Unless we make Christmas an occasion to share our blessings, all the snow in Alaska won’t make it ‘white.’",
"Now the God of hope fill you with all joy and peace in believing that ye may abound in hope, through the power of the Holy Ghost.",
"Thanks be unto God for his unspeakable Gift.",
"Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
"You can never truly enjoy Christmas until you can look up into the Father’s face and tell Him you have received His Christmas gift.",
"All the Christmas presents in the world are worth nothing without the presence of Christ.",
"May the hope, the peace, the joy, and the love represented by the birth in Bethlehem this night fill our lives and become part of all that we say and do.",

"Christmas isn’t just a day, it’s a frame of mind.",
"Love the giver more than the gift.",
"It is Christmas in the heart that puts Christmas in the air.",
"Christmas is a stocking stuffed with sugary goodness.",
"Christmas isn’t a season. It’s a feeling.",
"It’s the most wonderful time of the year!",
"Nothing seems to bring people together like Christmas.",
"A good conscience is a continual Christmas.",
"Christmas, my child, is love in action.",
"Christmas is the day that holds all time together.",
"For it is in giving that we receive.",
"Remember this December, that love weighs more than gold.",
"What I don’t like about office Christmas parties is looking for a job the next day.",

"There’s no experience quite like cutting your own live Christmas tree out of your neighbor’s yard.",
"Christmas is a baby shower that went totally overboard.",
"Santa Claus has the right idea. Visit people only once a year.",
"That’s what Christmas memories are made from, they’re not planned, they’re not scheduled, nobody puts them in their Blackberry, they just happen.",
"Once again, we come to the Holiday Season, a deeply religious time that each of us observes, in his own way, by going to the mall of his choice.",
"Nothing’s as mean as giving a little child something useful for Christmas.",
"Christmas is a togethery sort of holiday. That’s my favorite kind.",
"What I like about Christmas is that you can make people forget the past with the present.",
"I hate the radio this time of year because they play “All I Want For Christmas Is You” like, every other song. And that’s just not enough.",
"Adults can take a simple holiday for Children and screw it up. What began as a presentation of simple gifts to delight and surprise children around the Christmas tree has culminated in a woman unwrapping six shrimp forks from her dog, who drew her name.",
"A lovely thing about Christmas is that it’s compulsory, like a thunderstorm, and we all go through it together.",
"I love Christmas. I receive a lot of wonderful presents I can’t wait to exchange.",
"Some people are born for Halloween, and some are just counting the days until Christmas.",
"You’re skipping Christmas! Isn’t that against the law?"];

const authors = ["Richelle E. Goodrich",
"Washington Irving",
"Will Ferrell",
"Charles Dickens",
"Peg Bracken",
"Hamilton Wright Mabie",
"Fred Rogers",
"Dr. Seuss",
"Clement Clarke Moore",
"Phillips Brooks",

"David Cameron",
"Marjorie Holmes",
"Rosie Thomas",
"Andy Rooney",
"Burton Hills",
"Donald E. Westlake",
"Andy Rooney",
"Janice Maeditere",
"Joanna Gaines",
"Carrie Fisher",
"Catherine Pulsifer",

"Charles M. Schulz",
"Thomas S. Monson",
"Dale Evans",
"Bob Hope",
"Gordon B. Hinckley",
"Peg Bracken",
"Chris Van Allsburg (from Polar Express)",
"Kevin Alan Milne",
"Eric Sevareid",
"Peg Bracken",
"Richard Paul Evans",

"Andy Rooney",
"Ann Garnett Schultz",
"Agnes M. Pahro",
"Deborah Whipp",
"Helen Steiner Rice",
"Roy L. Smith",
"Laura Ingalls Wilder",
"Washington Irving",
"Bing Crosby",
"Romans 15:13",
"2 Corinthians 9:15",
"James 1:17",
"John R. Rice",
"David Jeremiah",
"Rev. Richard J. Fairchild",

"Valentine Davies",
"Brigham Young",
"W.T. Ellis",
"Mo Rocca",
"Edna Ferber",
"Edward Pola and George Wyle",
"Steven Dodrill",
"Benjamin Franklin",
"Dale Evans",
"Alexander Smith",
"Francis of Assisi",
"Josephine Dodge Daskam Bacon",
"Phyllis Diller",

"Dan Florence",
"Andy Borowitz",
"Victor Borge",
"Kelly Finch (from Deck the Halls)",
"Dave Barry",
"Kin Hubbard",
"A. A. Milne (from Winnie the Pooh)",
"Don Marquis",
"Bridger Winegar",
"Erma Bombeck",
"Garrison Keillor",
"Henny Youngman",
"Stephen Graham Jones",
"Spike Frohmeyer (from Christmas With the Kranks)"];



var generateQuote = function(){
    var index = Math.floor(Math.random() * quotes.length);
    quote.innerText = '"' + quotes[index] + '"';
    author.innerText = '-' + authors[index];
    if(quotes[index].length >= 33 & quotes[index].length < 57){
        quote.style.fontSize = "33px";
    }
    else if(quotes[index].length >= 57 & quotes[index].length < 81){
        quote.style.fontSize = "32px";
    }
    else if(quotes[index].length >= 81 & quotes[index].length < 105){
        quote.style.fontSize = "31px";
    }
    else if(quotes[index].length >= 105 & quotes[index].length < 129){
        quote.style.fontSize = "30px";
    }
    else if(quotes[index].length >= 129 & quotes[index].length < 153){
        quote.style.fontSize = "29px";
    }
    else if(quotes[index].length >= 153 & quotes[index].length < 177){
        quote.style.fontSize = "28px";
    }
    else if(quotes[index].length >= 177 & quotes[index].length < 201){
        quote.style.fontSize = "27px";
    }
    else if(quotes[index].length >= 201 & quotes[index].length < 225){
        quote.style.fontSize = "26px";
    }
    else if(quotes[index].length >= 225 & quotes[index].length < 249){
        quote.style.fontSize = "25px";
    }
    else if(quotes[index].length >= 249){
        quote.style.fontSize = "24px";
    }
};

generateButton.addEventListener("click", generateQuote);

generateQuote();;