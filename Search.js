const quotes = [
    {
      id: 0,
      cathegory: "Motivation",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Muhammad_Ali%2C_gtfy.00140_%28cropped%29.jpg",
      quote: "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.",
      author: "Muhammad Ali",
    },
    {
      id: 1,
      cathegory: "Motivation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7JQrWb17N_YD2YAFXp7d_-8i4eJ94HymBQ&s",
      quote: "We are what we repeatedly do. Excellence then is not an act but a habit",
      author: "Napoleon Hill",
    },
    {
      id: 2,
      cathegory: "Funny",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg",
      quote: "Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.",
      author: "Winston Churchill",
    },
    {
      id: 3,
      cathegory: "Romance",
      image: "https://cdn.shopify.com/s/files/1/1043/8646/files/ANGELOU-superJumbo_large.jpg?v=1585970479",
      quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
      author: "Maya Angelou",
    },
    {
        id: 4,
      cathegory: "Knowledge",
      image: "https://images.squarespace-cdn.com/content/v1/647f71644da23c460898dc9f/87167d61-de80-4500-be36-d627409df0fc/Insanely_detailed_portrait_of_Confucius_by_Android_Jones%2C_meticulous%2C_insanely_detailed%2C_beautiful_composition%2C_award_winning%2C_trending_on_art_station%2C_massive_neopunk_confucius_portrait_by_android_jones+%284%29-min.jpg",
      quote: "Real knowledge is to know the extent of one's ignorance.",
      author: "Confucius",
    },
    {
        id: 5,
      cathegory: "Travel",
      image: "https://media.newyorker.com/photos/5db223514b897900080a2a47/1:1/w_2048,h_2048,c_limit/Dettmar-TSEliot.jpg",
      quote: "Only those who will risk going too far can possibly find out how far one can go.",
      author: "T. S. Eliot",
    },
    {
        id: 6,
      cathegory: "Failure",
      image: "https://hips.hearstapps.com/hmg-prod/images/republican-presidential-candidate-former-president-donald-news-photo-1721157463.jpg?crop=0.66699xw:1xh;center,top&resize=640:*",
      quote: "Sometimes by losing a battle you find a new way to win the war.",
      author: "Donald Trump",
    },
    {
        id: 7,
      cathegory: "Love",
      image: "https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg",
      quote: "Love is like a river, that flows both swift and steady, and yet always carries us forward.",
      author: "Jane Austen",
    },
    {
        id: 8,
      cathegory: "Career",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/640px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
      quote: "The journey of a thousand miles begins with a single step.",
      author: "Mahatma Gandhi",
    },
    {
        id: 9,
      cathegory: "Education",
      image: "https://cdn.britannica.com/70/145570-050-6C571884/Aristotle-Stagira-Greece.jpg",
      quote: "Education is not preparation for life; education is life itself.",
      author: "Aristotle",
    },
    {
        id: 10,
      cathegory: "Success",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg",
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
        id: 11,
      cathegory: "Friendship",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg",
      quote: "The greatest gift of all is not to live life as we would like to live, but to find life in what we live.",
      author: "Albert Einstein",
    },
    {
        id: 12,
      cathegory: "Inspiration",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg",
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Albert Einstein",
    },
    {
        id: 13,
      cathegory: "Sustainability",
      image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-211182-GettyImages-51129873.jpg",
      quote: "Sustainability is the key to a sustainable future. It means doing what you can to minimize harm, reduce waste, and protect the environment.",
      author: "Michael Jackson",
    },
    {
        id: 14,
      cathegory: "Health",
      image: "https://www.songhall.org/images/uploads/exhibits/John_Lennon.jpg",
      quote: "Health is not about how many pills you take, but about how you take them.",
      author: "John Lennon",
    },
    {
        id: 15,
      cathegory: "Family",
      image: "https://www.songhall.org/images/uploads/exhibits/John_Lennon.jpg",
      quote: "Family is like a tree, where each branch is a person, and the whole is the family.",
      author: "John Lennon",
    },
    {
        id: 16,
      cathegory: "Community",
      image: "https://www.songhall.org/images/uploads/exhibits/John_Lennon.jpg",
      quote: "Community is the cornerstone of a healthy society, a place where people come together to share and learn.",
      author: "John Lennon",
    },
    {
        id: 17,
      cathegory: "Innovation",
      image: "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
      quote: "Innovation is not about creating something new, but about learning from something old.",
      author: "Steve Jobs",
    },
    {
        id: 18,
      cathegory: "Conflict",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg",
      quote: "In the face of adversity, we must always strive for the impossible.",
      author: "Winston Churchill",
    },
    {
        id: 19,
      cathegory: "Love",
      image: "https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg",
      quote: "Love is like a river, that flows both swift and steady, and yet always carries us forward.",
      author: "Jane Austen",
    },
    {
        id: 20,
      cathegory: "Education",
      image: "https://cdn.britannica.com/70/145570-050-6C571884/Aristotle-Stagira-Greece.jpg",
      quote: "Education is not preparation for life; education is life itself.",
      author: "Aristotle",
    }
  ];
  
  const container = document.getElementById("gallery");
  const input = document.getElementById("input-searchbar")
  
  for (let quote of quotes) {
    // Create a card element
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Dynamically populate the card's HTML content
    card.innerHTML = `
      <img src="${quote.image}" alt="${quote.author}" class="item">
      <h3>${quote.author}</h3>
      <p>${quote.quote}</p>
      <small>${quote.cathegory}</small>
    `;
  
    // Append the card to the gallery container
    container.appendChild(card);
  }


    let cards = document.querySelectorAll(".card");

  function search() {
    let isFound = false;
    let cards = document.querySelectorAll(".card");
    resetHidden();



    
    for (let quote of quotes) {
        let id = quote.id
        let cathegory= quote.cathegory.toLowerCase();
        let quoteText= quote.quote.toLowerCase();
        let author= quote.author.toLowerCase();
        let searchQuery = input.value.toLowerCase();

        if ( (cathegory.includes(searchQuery) || (quoteText.includes(searchQuery) || (author.includes(searchQuery))))){
            console.log(searchQuery);
            console.log("found");
            console.log(cathegory);
            console.log(quoteText);
            console.log(author);
            console.log(id);
            isFound = true;
            cards[id].classList.remove("hidden");
        } else {
            cards[id].classList.add("hidden");
        }

        // } else {
        //     alert("search query not found");
        // }
    } if (isFound === false){
        
    }
  }


  function resetHidden(){
    for (let i=0; i<cards.length; i++) {
        cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards[i].classList.remove("hidden");  // show all cards initially  // cards
    
        
    }
  }
  
  
// Add to favourites function

const favoritesContainer = document.getElementById("favorites-container");
const favoriteIds = new Set(); // To track favorite quotes and avoid duplicates

// Function to add a quote to the Favorites List
function addToFavorites(quote) {
  if (favoriteIds.has(quote.id)) {
    alert("This quote is already in your Favorites!");
    return;
  }

  favoriteIds.add(quote.id); // Add the quote ID to the Set

  // Create a card for the favorite quote
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");

  favoriteCard.innerHTML = `
    <img src="${quote.image}" alt="${quote.author}">
    <h3>${quote.author}</h3>
    <p>${quote.quote}</p>
    <small>${quote.cathegory}</small>
    <button onclick="removeFromFavorites(${quote.id})">Remove</button>
  `;

  favoritesContainer.appendChild(favoriteCard);
}

// Function to remove a quote from the Favorites List
function removeFromFavorites(quoteId) {
  favoriteIds.delete(quoteId); // Remove the ID from the Set

  // Remove the card from the DOM
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.querySelector("button").onclick.toString().includes(`${quoteId}`)) {
      card.remove();
    }
  });
}

// Add a "Favorite" button to each card
cards.forEach((card, index) => {
  const favoriteButton = document.createElement("button");
  favoriteButton.textContent = "Add to Favorites";
  favoriteButton.onclick = () => addToFavorites(quotes[index]); // Pass the quote object
  card.appendChild(favoriteButton); // Append the button to the card
});





