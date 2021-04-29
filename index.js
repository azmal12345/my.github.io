// ************************************* navbar *********************************************
const navbarIcon = document.getElementById("bars");
const navbarBody = document.getElementById("list_item");

const song = new Audio("navbarIconImg/navClick.mp3.mp3");
navbarIcon.addEventListener("click", () => {
    navbarBody.classList.toggle("active");
    song.play();
})

// list item sound effeact with click navbar 
const clickSound = document.querySelectorAll(".clickSound");
const sound = new Audio("navbarIconImg/click.mp3.mp3");
clickSound.forEach( (clickMusice) => {
    clickMusice.addEventListener("click", () => {
        sound.play();
    })
})
// ************************************* search button *********************************************
const searchButton = document.querySelectorAll(".searchClick");
const serachInput = document.getElementById("searchInput");
const searchBodyBox = document.querySelector(".searchBox");
const angleLeft = document.getElementById("angleLeftButton");

serachInput.addEventListener("click", () => {
    searchBodyBox.classList.add("searchInputBox");
    // navbar body with text 
    searchButton.forEach( (searchBoxInput) => {
    searchBoxInput.style.display = "none";
   })
})

angleLeft.addEventListener("click", () => {
    searchBodyBox.classList.remove("searchInputBox");
    // navbar body with text 
    searchButton.forEach( (searchBoxInput) => {
    searchBoxInput.style.display = "block";
   })
})

// work in page refresh 
const pageRefresh = document.querySelector(".angleLeft");

pageRefresh.addEventListener("click", () => {
    location.reload();
})
// ************************************* input search function *********************************************
const searchFilter = document.getElementById("keyup");

const searchKyeup = () => {
    let filterValue = document.querySelector(".inputKey").value.toUpperCase();
    let myFlag = document.getElementById("myFlag");
    let li = myFlag.getElementsByTagName("li");

    // for loop 
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName("p")[0];
        
        if(a){
            let textValue = a.textContent || a.innerHTML;

            if(textValue.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
            }else{
                li[i].style.display = "none";
            }
        }
    }

};

searchFilter.addEventListener("keyup", searchKyeup);

// ************************************* scroll button *********************************************
const scrollTop = document.querySelector(".scrollTop");
// const scrollWindow = window.pageYOffset;

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 250){
    scrollTop.classList.add("scrollButton");
  }else{
      scrollTop.classList.remove("scrollButton");
  }
})

// ************************************* social icon *********************************************
let toolTip = document.querySelectorAll(".toolTip");
let iconPlus = document.querySelector(".plus_icon");

iconPlus.addEventListener("click", () => {
    toolTip.forEach( (tooTipButton) => {
        tooTipButton.classList.toggle("iconboxPop");
    })
})

// ************************************* click flag and show container flag *********************************************
const maineCountainer = document.getElementById("maineCountainer");
const backButton = document.getElementById("backButton");
const clickDisplay = document.querySelectorAll(".clickDisplay");
const imgFlagList = document.querySelectorAll(".imgFlag");
// social_icon 
const social_icon = document.querySelector(".social_icon");

imgFlagList.forEach( (flagClick) => {
    flagClick.addEventListener("click", () => {
        for(let i = 0; i < clickDisplay.length; i++){
            clickDisplay[i].style.display = "none";
            maineCountainer.style.display = "block";
            // social_icon
            social_icon.style.display = "none";
        }
    })
})

// click button and show flag container 
backButton.addEventListener("click", () => {
    for(let i = 0; i < clickDisplay.length; i++){
        clickDisplay[i].style.display = "block";
        maineCountainer.style.display = "none";
        // this is a work in page refresh 
        location.reload();
    }
})

        // ************************************* json with countrys *********************************************
const country = document.querySelector(".country");
const capital = document.querySelector(".capital");
const population = document.querySelector(".population");
const area = document.querySelector(".area");
const gdp = document.querySelector(".gdp");
const dialing_code = document.querySelector(".dialing_code");
const currency = document.querySelector(".currency");
const continent = document.querySelector(".continent");
const animal = document.querySelector(".animal");
const national_game = document.querySelector(".national_game");
const national_days = document.querySelector(".national_days");
const official_languages = document.querySelector(".official_languages");
const religion = document.querySelector(".religion");
const flags = document.querySelector(".flags");
const national_song = document.querySelector(".national_song");
const google_map = document.querySelector(".google_map");
const description = document.querySelector(".description");
let index = 0;

const imgList = document.querySelectorAll(".imgFlag");

imgList.forEach( (imgClick) => {
    imgClick.addEventListener("click", () => {
        // fetch api start
        fetch("flag.json")
             .then( (responsive) => {
                   return responsive.json();
        })
        .then( (data) => {
            console.log(data);
            index = parseInt(imgClick.id);
            country.innerHTML = `<span class="fontSize">COUNTRY : </span> ${data.Country_Data[index].Country}`;
            capital.innerHTML = `<span class="fontSize">CAPITAL : </span> ${data.Country_Data[index].Capital}`;
            population.innerHTML = `<span class="fontSmall"> Population : </span> ${data.Country_Data[index].Population}`;
            area.innerHTML = `<span class="fontSmall"> Area : </span> ${data.Country_Data[index].Area} <sup>2</sup>`;
            gdp.innerHTML = `<span class="fontSmall">GDP : </span> ${data.Country_Data[index].GDP}`;
            dialing_code.innerHTML = `<span class="fontSmall">Dialing Code : </span> ${data.Country_Data[index]["Dialing Code"]}`;
            currency.innerHTML = `<span class="fontSmall">Currency : </span> ${data.Country_Data[index].Currency}`;
            continent.innerHTML = `<span class="fontSmall">Continent : </span> ${data.Country_Data[index].Continent}`;
            animal.innerHTML = `<span class="fontSmall">Animal : </span> ${data.Country_Data[index].Animal}`;
            national_game.innerHTML = `<span class="fontSmall">National Game : </span> ${data.Country_Data[index]["National Game"]}`;
            national_days.innerHTML = `<span class="fontSmall">National Days : </span> ${data.Country_Data[index]["National Days"]}`;
            official_languages.innerHTML = `<span class="fontSmall">Official Languages : </span> ${data.Country_Data[index]["Official Languages"]}`;
            religion.innerHTML = `<span class="fontSmall">Religion : </span> ${data.Country_Data[index]["Religion"]}`;
            flags.src = data.Country_Data[index]["Flags"];
            national_song.src = data.Country_Data[index]["National Song"];
            google_map.src = data.Country_Data[index]["Google Map"];
            description.innerHTML = `<span class="fontSmall">Description : </span> ${data.Country_Data[index]["Description"]}`;
     }).catch( (error) => {
            console.log(error);
    })
        // fetch api end 
    })
})


// *********************************** footer ***************************************
const data = document.getElementById("date");
const dataShow = new Date();

data.innerHTML = `${dataShow.getFullYear()}`;
data.style.color = "rgb(255,255,255)";