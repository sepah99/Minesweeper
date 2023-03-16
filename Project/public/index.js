function create_grid(container, square, map){
    const numRows = 5;
    const numCols = 5;
    map = initialize_game(map)
   
    // Loop through the rows and columns to create the grid
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Create a new div element
        const div = document.createElement("div");
        
        // Set the div's class and text content
        div.classList.add("square");
        // div.innerHTML = `${1/25}`;

        div.setAttribute("id", `(${i},${j})`);

        // map[`(${i},${j})`] = "0"
        div.addEventListener('click', function(){
            
            if(`${map[div.id]}` == "&#x1F4A3;")
            {
                explode(container)
            }
            else{
                div.style.backgroundColor = "#ae497c";
                count = 10

                
                div.innerHTML = `${map[div.id]}`;
                map[div.id] = "0"

                const divs = container.querySelectorAll('div');
                divs.forEach(div => {
                if(div.innerHTML == ' '){count--;}
                if(div.innerHTML!='1' & div.innerHTML!=' ') {}}); 
              
            } 
            
        })

        // Append the div to the container
        container.appendChild(div);
      }
    }
    
    return map
}
function explode(container){
    const divs = container.querySelectorAll('div');
    divs.forEach(div => {
    // Unicode value for explosion emoji "&#x1F4A5;"
    div.innerHTML = "&#x1F4A5;";
    });
}
function initialize_game(map){
    let bombs = []
    let bomb = []
    let i = 0;
    
    // Picking random number of bombs between 1-4
    // let num_bombs=(Math.floor(Math.random()*10/3)+1)

    let num_bombs=1
    const numRows = 5;
    const numCols = 5;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            map[`(${i},${j})`] = " "
        }
    }
    while(i < num_bombs){
        r = Math.floor(Math.random()*5)
        c = Math.floor(Math.random()*5)
        bomb = [r, c]

        if(!bombs.includes(bomb)){
       
            // Unicode value for bomb emoji "&#x1F4A3;"
            map[`(${r},${c})`] = "&#x1F4A3;"
            
            if (r - 1 >= 0){
                map[`(${r - 1},${c})`] = "1"
            }

            if (r + 1 < numRows){
                map[`(${r + 1},${c})`] = "1"
            }

            if (c - 1 >= 0){
                map[`(${r},${c - 1})`] = "1"

                if (r + 1 < numRows){
                    map[`(${r + 1},${c - 1})`] = "1"
                }
                if (r - 1 >= 0){
                    map[`(${r - 1},${c - 1})`] = "1"
                }
            }
            if (c + 1 < numCols){
                map[`(${r},${c + 1})`] = "1"
            }

            bombs.push(bomb);
            i++;
        }
    }
    return map
}
document.addEventListener("DOMContentLoaded", (event) => {
    let container = document.querySelector(".game-container");
    let square = document.querySelector(".square");
    var map = Object()
    map = create_grid(container, square, map)
    
})