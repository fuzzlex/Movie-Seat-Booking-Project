const seats = document.querySelectorAll(".row .seat:not(.selected-seat)");
const movieSelection = document.getElementById("movie-selection");
const approveButton = document.getElementById("approve-button");
const selectedSeats = document.getElementsByClassName("selected-seat");
const allSeats = document.querySelectorAll(".row .seat");
let valueFilm = 0;
let a = [];
let b = [];
let c = [];
let d = [];
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
    addLocalStorage();


    [...selectedSeats].forEach((e) =>{
        e.classList.remove("selected-seat")
        e.classList.add("occupied")
        
    });
                
                 
})
function addLocalStorage() {
    let x = [...selectedSeats].map( (e) => {
        return e.textContent;  });
        if(valueFilm == 10){
            localStorage.setItem("selected1", x);
            [...localStorage.getItem("selected1").split(",")].forEach(e =>{
                a.push(e)
            });}
         if(valueFilm == 8){
             localStorage.setItem("selected2", x);
             [...localStorage.getItem("selected2").split(",")].forEach(e =>{
                 b.push(e)
             });}
         if(valueFilm == 12){
             localStorage.setItem("selected3", x);
             [...localStorage.getItem("selected3").split(",")].forEach(e =>{
                 c.push(e)
             });}
             if(valueFilm == 6){
                 localStorage.setItem("selected4", x);  
                 [...localStorage.getItem("selected4").split(",")].forEach(e =>{
                     d.push(e)
                 });}

    
}


function localStorageLoad() {
    if (valueFilm == 10){
        allSeats.forEach(g =>{
            a.forEach(e =>{
                if(g.textContent == e){
                    g.classList.remove("reset-seats");                    
                    g.classList.add("occupied")
                };
            });
        });
        };
        if (valueFilm == 8){
            allSeats.forEach(g =>{
                b.forEach(e =>{
                    if(g.textContent == e){
                        g.classList.remove("reset-seats");
                        g.classList.add("occupied")
                    };
                });
            });
            };
            if (valueFilm == 12){
                allSeats.forEach(g =>{
                   c.forEach(e =>{
                        if(g.textContent == e){

                            g.classList.remove("reset-seats");
                            g.classList.add("occupied")
                        };
                    });
                });
                };
                if (valueFilm == 6){
                    allSeats.forEach(g =>{
                        d.forEach(e =>{
                            if(g.textContent == e){
    
                                g.classList.remove("reset-seats");
                                g.classList.add("occupied")
                            };
                        });
                    });
                    };
    
}
