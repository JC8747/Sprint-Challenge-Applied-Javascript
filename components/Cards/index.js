// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        const articles = response.data.articles;
        const topic = Object.entries(articles);
        topic.forEach(i =>{
            i[1].forEach(element =>{
            const newArticle = createCard(element)
            cardContainer.append(newArticle);
            })
        })
    })
    const cardContainer = document.querySelector('.cards-container');
    console.log('cardContainer',cardContainer)
function createCard(data){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const attr = document.createElement('span');

    imgCont.append(img);
    author.append(imgCont, attr);
    card.append(headline, author);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container')
    img.setAttribute('src', data.authorPhoto);
    headline.textContent = data.headline;
    attr.textContent = `By ${data.authorName}`;

    return card
}