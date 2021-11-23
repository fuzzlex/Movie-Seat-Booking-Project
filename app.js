const seats = document.querySelectorAll(".row .seat:not(.selected-seat)");
const movieSelection = document.getElementById("movie-selection");
const approveButton = document.getElementById("approve-button");
const selectedSeats = document.getElementsByClassName("selected-seat");
const allSeats = document.querySelectorAll(".row .seat");
let valueFilm = 0;
localStorage.clear();
movieSelection.addEventListener("change", (e)=>{
    valueFilm = e.target.value;
    allSeats.forEach(g =>{
        g.classList.remove("occupied");
        g.classList.add("reset-seats");
    });
    localStorageLoad();

});

seats.forEach(element =>{
    element.addEventListener("click", ()=>{
        if(valueFilm === 0) alert("Please select a film please!!")
        else{
            element.classList.remove("reset-seats");
            element.classList.toggle("selected-seat");            
    }
    
})
})
approveButton.addEventListener("click", ()=>{
    confirm("Are you sure to confirm?");
    let x = [...selectedSeats].map( (element) => {
        return element.textContent;           
     });
    [...selectedSeats].forEach((e) =>{
        e.classList.remove("selected-seat")
        e.classList.add("occupied")
        
    });
    if(valueFilm == 10){
       localStorage.setItem("selected1", x);}
    if(valueFilm == 8){
            localStorage.setItem("selected2", x);}
    if(valueFilm == 12){
                localStorage.setItem("selected3", x);}
    if(valueFilm == 6){
                    localStorage.setItem("selected4", x);}                 
                 
})


function localStorageLoad() {
    if (valueFilm == 10){
        allSeats.forEach(g =>{
            g.classList.remove("reset-seats");
            [...localStorage.getItem("selected1").split(",")].forEach(e =>{
                if(g.textContent == e){
                    g.classList.add("occupied")
                };
            });
        });
        };
        if (valueFilm == 8){
            allSeats.forEach(g =>{
                [...localStorage.getItem("selected2").split(",")].forEach(e =>{
                    if(g.textContent == e){
                        g.classList.remove("reset-seats");
                        g.classList.add("occupied")
                    };
                });
            });
            };
            if (valueFilm == 12){
                allSeats.forEach(g =>{
                    [...localStorage.getItem("selected3").split(",")].forEach(e =>{
                        if(g.textContent == e){

                            g.classList.remove("reset-seats");
                            g.classList.add("occupied")
                        };
                    });
                });
                };
                if (valueFilm == 6){
                    allSeats.forEach(g =>{
                        [...localStorage.getItem("selected4").split(",")].forEach(e =>{
                            if(g.textContent == e){
    
                                g.classList.remove("reset-seats");
                                g.classList.add("occupied")
                            };
                        });
                    });
                    };
    
}
