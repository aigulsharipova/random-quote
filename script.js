const button = document.querySelector('#btn');
const par = document.querySelector('#text');

const quotes = ["the people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs", "Dude, suckin' at something is the first step at being sorta good at something. - Jake (Adventure Time)", "Either I will find a way, or I will make one. - Philip Sidney", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison", "You are never too old to set another goal or to dream a new dream. - C.S Lewis", "If you can dream it, you can do it. - Walt Disney", "Never give up, for that is just the place and time that the tide will turn. - Harriet Beecher Stowe", "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want. - Muhammad Ali", "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them. - Bruce Lee", ]

button.addEventListener('click', () => {
  let random = quotes[Math.floor(Math.random() * quotes.length)]

  par.textContent = random;
})