const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countiresContainer = document.getElementById('countries-conatiner');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common} </h3>
        <h4>Official Name: ${country.name.official} </h4>
        <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countiresContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <img class="flag" src="${country.flags.png}">
    `
}

loadCountries();