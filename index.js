let countries = [
  {
    name: "india",
    state: [
      {
        name: "uttrakhand",
        city: [
          {
            name: "satpuli",
          },
          {
            name: "kotdwara",
          },
        ],
      },
      {
        name: "haryana",
        city: [
          {
            name: "jalander",
          },
          {
            name: "rawal",
          },
        ],
      },
    ],
  },
  {
    name: "America",
    state: [
      {
        name: "California",
        city: [
          {
            name: "Los Angeles",
          },
          {
            name: "sanDiago",
          },
        ],
      },
      {
        name: "AREA59",
        city: [
          {
            name: "ALien Zone",
          },
          {
            name: "DummyZone",
          },
        ],
      },

    ],
  },
];



// populating Countries
let statesList = countries.map((country) => country.state);
let countryList = document.getElementById("coutry-list");
countries.forEach(function (country, index) {
  countryList.innerHTML += `<div class="country">${country.name}
     <div class="state-list">
     </div>
    </div>`;
});
// populating state
countries.forEach((country, index) => {
  country.state.forEach((s) => {
    document.getElementsByClassName("state-list")[index].innerHTML += `
        <div class = "state">
        ${s.name}
        <div class="city-list">
           
        </div>
        </div>`;
  });
});
// populating city
let cityLists = document.querySelectorAll(".city-list");
let stateCites = statesList.map((state) => state.map((item) => item.city));
stateCites = stateCites.flat(1);

cityLists.forEach((city,index) => {
 stateCites[index].forEach(elem=>{
        city.innerHTML += `<div class ="city">${elem.name}</div>`
 })
});
