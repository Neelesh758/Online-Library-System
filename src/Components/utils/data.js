const Books = [
    {
        id:1,
        name:"Into The Wild",
        author:"Jon Krakauer",
        catagory:"NonFiction",
        Description:"In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. His name was Christopher Johnson McCandless. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself.",
        cover:'https://images4.penguinrandomhouse.com/cover/9780385486804',
        rating:5
    },
    {
       id:2,
       name:"The Battle for God",
       author:"Karen Armstrong",
       catagory:"NonFiction",
       Description:"Contrary to popular belief, fundamentalism is not a throwback to some ancient form of religion but rather a response to the spiritual crisis of the modern world. Blending history, sociology, and spirituality, The Battle for God is a compelling and compassionate study of a radical form of religious expression that is critically shaping the course of world history.",
       cover:'https://images2.penguinrandomhouse.com/cover/9780345391698',
       rating:4 
    },
    {
        id:3,
        name:"The Age of Wonder",
        author:"Richard Holmes",
        catagory:"NonFiction",
        Description:"The Age of Wonder is a colorful and utterly absorbing history of the men and women whose discoveries and inventions at the end of the eighteenth century gave birth to the Romantic Age of Science.",
        cover:'https://images3.penguinrandomhouse.com/cover/9781400031870',
        rating:3 
     },
     {
        id:4,
        name:"The Lost City of Z",
        author:"David Grann",
        catagory:"NonFiction",
        Description:"Over the years countless have perished trying to find evidence of Percy Fawcett’s party and the place he called “The Lost City of Z.” In this masterpiece of narrative nonfiction, journalist David Grann interweaves the spellbinding stories of Fawcett’s quest for “Z” and his own journey into the deadly jungle, as he unravels the greatest exploration mystery of the twentieth century.",
        cover:'https://images2.penguinrandomhouse.com/cover/9781400078455',
        rating:2
     },
     {
        id:5,
        name:"Hat Box",
        author:"Stephen Sondheim",
        catagory:"NonFiction",
        Description:"Hat Box is a handsomely designed package that includes lyrics from Stephen Sondheim’s most popular shows like West Side Story, Sweeney Todd, Sunday in the Park with George, and Into the Woods, richly annotated with anecdotes, pointed observations, and invaluable advice from one of the greatest songwriters of our time.",
        cover:'https://images3.penguinrandomhouse.com/cover/9780307957726',
        rating:1
     },
     {
        id:6,
        name:"The Life Impossible",
        author:"Matt Haig",
        catagory:"Fiction",
        Description:"The remarkable next novel from Matt Haig, the author of the #1 New York Times bestseller The Midnight Library. When retired math teacher Grace Winters is left a run-down house on a Mediterranean island by a long-lost friend, curiosity gets the better of her. She arrives in Ibiza with a one-way ticket, no guidebook, and no plan. Filled with wonder and wild adventure, this is a story of hope and the life-changing power of a new beginning.",
        cover:'https://images1.penguinrandomhouse.com/cover/9780593489277',
        rating:5,
     },
     {
        id:7,
        name:"Late Bloomers",
        author:"Deepa Varadarajan",
        catagory:"Fiction",
        Description:"After 36 years of a dutiful but unhappy arranged marriage, recently divorced Suresh and Lata Raman find themselves starting new paths in life. Meanwhile, Suresh and Lata’s daughter, Priya, embarks upon a clandestine affair of her own. And their son, Nikesh, pretends at a seemingly perfect marriage. Over the course of three weeks in August, the whole family will uncover one another’s secrets, confront the limits of love and loyalty, and explore life’s second chances.  Charming, funny, and moving, Late Bloomers introduces a delightful new voice in fiction with the story of four individuals trying to understand how to be happy in their own lives — and as a family.",
        cover:'https://images1.penguinrandomhouse.com/cover/9780593498026',
        rating:4
     },
     {
        id:8,
        name:"Fried Green Tomatoes at the Whistle Stop Cafe",
        author:"Fannie Flagg",
        catagory:"Fiction",
        Description:"Folksy and fresh, endearing and affecting, Fried Green Tomatoes at the Whistle Stop Cafe is the now-classic novel of two women in the 1980s; of gray-headed Mrs. Threadgoode telling her life story to Evelyn, who is in the sad slump of middle age. As the past unfolds, the present – for Evelyn and for all of us – will never be quite the same again …",
        cover:'https://images1.penguinrandomhouse.com/cover/9781400064625',
        rating:3
     },
     {
        id:9,
        name:"We’ll Prescribe You a Cat",
        author:"Syou Ishida",
        catagory:"Fiction",
        Description:"A cat a day keeps the doctor away … Discover the award-winning, bestselling Japanese novel that has become an international sensation in this utterly charming, vibrant celebration of the healing power of cats.",
        cover:'https://images1.penguinrandomhouse.com/cover/9780593818749',
        rating:1
     },
     {
        id:10,
        name:"The Travelling Cat Chronicles",
        author:"Hiro Arikawa",
        catagory:"Fiction",
        Description:"A book that “speak[s] volumes about our need for connection – human, feline, or otherwise” (The San Francisco Chronicle), The Travelling Cat Chronicles is a life-affirming anthem to kindness and self-sacrifice that shows how the smallest things can provide the greatest joy – the perfect read for cat lovers and travelers!",
        cover:'https://images4.penguinrandomhouse.com/cover/9780451491336',
        rating:5
     },
     {
        id:11,
        name:"The City & The City",
        author:"China Miéville",
        catagory:"Sifi",
        Description:"Combining his fantastic weird fiction with a police procedural, Miéville delivers a tightly-knit story that won the Hugo Award. The novel takes Inspector Tyador Borlú, of the Extreme Crime Squad, through two very different worlds on the hunt for a murderer. Astounding storytelling by one of the best writers working today.",
        cover:'https://images2.penguinrandomhouse.com/cover/9780345497529',
        rating:4
     },
     {
        id:12,
        name:"Cloud Atlas ",
        author:"David Mitchell",
        catagory:"Sifi",
        Description:"As wild as a videogame, as mysterious as a Zen koan, Cloud Atlas is an unforgettable tour de force that, like its incomparable author, has transcended its cult classic status to become a worldwide phenomenon.",
        cover:'https://images2.penguinrandomhouse.com/cover/9780812994711\s',
        rating:3
     },
     {
        id:13,
        name:"Dark Matter",
        author:"Blake Crouch",
        catagory:"Sifi",
        Description:"A “mind-blowing” (Entertainment Weekly) speculative thriller about an ordinary man who awakens in a world inexplicably different from the reality he thought he knew — from the author of Upgrade, Recursion, and the Wayward Pines trilogy. Dark Matter is a story about choices, paths not taken, and how far we’ll go to claim the lives we dream of.",
        cover:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Crouch_DarkMatter.jpg/220px-Crouch_DarkMatter.jpg',
        rating:2
     },
     {
        id:14,
        name:"Darwin’s Radio",
        author:"Greg Bear",
        catagory:"Sifi",
        Description:"Bear envisions a world where the next leap in human evolution is not superhero mutations but rather a small step that changes the world. Great characters fighting against bigotry amidst scientific upheaval and government control. Winner of the Nebula Award.",
        cover:'https://images3.penguinrandomhouse.com/cover/9780345435248',
        rating:3.5
     },
     {
        id:15,
        name:"The Daughter of Doctor Moreau",
        author:"Silvia Moreno-Garcia",
        catagory:"Sifi",
        Description:"From the bestselling author of Mexican Gothic and Velvet Was the Night comes a lavish historical drama reimagining of The Island of Doctor Moreau set against the backdrop of nineteenth-century Mexico.",
        cover:'https://images4.penguinrandomhouse.com/cover/9780593355350',
        rating:1
     }
]
export default Books;