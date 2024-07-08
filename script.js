//your JS code here. If required.
const blockIdInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");
const gridItems = document.querySelectorAll(".grid-item");

changeButton.addEventListener("click",()=>{
	let col = gridItems[blockIdInput.value-1]
	if(col==undefined){
		alert("block id not present!");
	}
	else{
		col.style.backgroundColor = colorInput.value
	}
})
resetButton.addEventListener("click",()=>{
	for (let grid of gridItems) {
		grid.style.backgroundColor = "transparent"
	}
})