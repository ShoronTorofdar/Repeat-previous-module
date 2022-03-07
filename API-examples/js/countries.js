const loadCountries = () => {
fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then(data => showCountries(data))
};

const showCountries = (countries) => {
  const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
       const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
       
        <h2>${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        <button onclick= "loadCountryByName('${country.name}')">Load Country By Name</button>
        `;
        countriesDiv.appendChild(div);
    })
}


const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (country) => {
  const countryDetailDiv = document.getElementById('country-detail');
  countryDetailDiv.innerHTML = `
    <h2>${country.name}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Subregion: ${country.subregion}</p> 
    <p>Native Name: ${country.nativeName}</p>
    <p>Currency: ${country.currencies[0].name}</p>
    <p>Language: ${country.languages[0].name}</p>
    <img src= "${country.flag}" alt="">
   
    <p>Border: ${country.borders}</p>
    `;

}