let width = prompt("How many squares width-wise?");
let height = prompt("How many squares height-wise?");

(width > 100) ? (width = 100): {};
(height > 100) ? (height = 100): {};
console.log(width,height)

function createGrid(width=16,height=16){
    const container = document.createElement('div');
    container.classList.add('container');

    const squareHeight = window.innerHeight / height;
    const squareWidth = window.innerWidth / width;

    for (let rowIdx = 0;rowIdx < width;rowIdx++){
        const row = document.createElement('div');
        row.classList.add("row")
        for (let col = 0; col < height;col++){
            const column = document.createElement("div")
            column.classList.add("column");
            row.appendChild(column);
            document.body.appendChild(container)
            column.style.height = squareHeight + "px";
            column.style.width = squareWidth + "px";
        }
        container.appendChild(row);

        
    }
    document.body.appendChild(container)
    }


function randomColor(counter){
    rgbIndex = [];
    for (let i = 0; i < 3;i++){
        let randomNumber = Math.floor(Math.random() * 256);
        rgbIndex.push(randomNumber - (counter * 20));
    }
    return `rgb(${rgbIndex})`;
}
    
createGrid(width,height);

const squares = document.querySelectorAll(".column");

squares.forEach((node)=>{
    const originalColor = node.style.backgroundColor;
    let mouseHoverCounter = 0;
    node.addEventListener('mouseover',()=>{
        mouseHoverCounter += 1;
        node.style.backgroundColor = randomColor(mouseHoverCounter);
        console.log(mouseHoverCounter)

        setTimeout(() =>{
            node.style.backgroundColor = originalColor;
        },100)
    })
})

