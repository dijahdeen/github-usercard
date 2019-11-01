/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(image, name, username, location, profile_url, followers, following, bio) {
  const gitCard = document.createElement('div');
  const gitmage = document.createElement('img');
  const gitinfo = document.createElement('div');
  const gitname = document.createElement('h3');
  const gitusn = document.createElement('p');
  const gitloc = document.createElement('p');
  const gitprof = document.createElement('p');
  const gitProfa = document.createElement('a');
  const gitfollowers = document.createElement('p');
  const gitfollowing = document.createElement('p');
  const gitbio = document.createElement('p');


  // set content and values
  gitmage.src = image
  gitname.textContent = name;
  gitusn.textContent = username;
  gitloc.textContent = 'Location: ' + location;
  gitprof.textContent = 'Profile: ';
  gitProfa.href = profile_url;
  gitProfa.textContent = profile_url;
  gitfollowers.textContent = 'Followers: ' + followers;
  gitfollowing.textContent = 'Following: ' + following;
  gitbio.textContent = 'Bio: ' + bio;

  // set classes
  gitCard.classList.add('card');
  gitmage.classList.add('img');
  gitinfo.classList.add('card-info');
  gitname.classList.add('name');
  gitusn.classList.add('username');

  // Set structure

  gitCard.appendChild(gitmage);
  gitCard.appendChild(gitinfo);
  gitinfo.appendChild(gitname);
  gitinfo.appendChild(gitusn);
  gitinfo.appendChild(gitloc);
  gitprof.appendChild(gitProfa);
  gitinfo.appendChild(gitprof);
  gitinfo.appendChild(gitfollowers);
  gitinfo.appendChild(gitfollowing);
  gitinfo.appendChild(gitbio);








  return gitCard;
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const container = document.querySelector('.cards');

axios.get('https://api.github.com/users/dijahdeen').then(response => {
  console.log(response);
  container.appendChild(createCard(response.data.avatar_url, response.data.name, response.data.login, response.data.location, response.data.html_url,
    response.data.followers, response.data.following, response.data.bio))
})

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'emichris',
  'cladams0203'
];

followersArray.forEach(username => {
  axios.get('https://api.github.com/users/' + username).then(response => {
    console.log(response);
    container.appendChild(createCard(response.data.avatar_url, response.data.name, response.data.login, response.data.location, response.data.html_url,
      response.data.followers, response.data.following, response.data.bio))
  })

})

// 'https://api.github.com/users/tetondan',
// 'https://api.github.com/users/dustinmyers',
// 'https://api.github.com/users/justsml',
// 'https://api.github.com/users/luishrd',
// 'https://api.github.com/users/bigknell'

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
