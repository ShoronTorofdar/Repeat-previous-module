const loadBuddies =()=>{
  fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => showBuddies(data.results))
};

const showBuddies = (props)=>{

const buddies = document.getElementById('buddies');
{
  props.map(buddy => {
    buddies.innerHTML += `<div class='buddy'>
       <h1>Name: ${buddy.name.first} ${buddy.name.last}</h1>
        <img src="${buddy.picture.large}">
        <h2>Email: ${buddy.email}</h2> 
        <h3>City: ${buddy.location.city}</h3>
    </div>`;
  })
}


}

