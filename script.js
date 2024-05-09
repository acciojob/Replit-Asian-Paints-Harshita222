//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    changeButton.addEventListener('click', function() {
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;

        // Reset all grid items' background color to transparent
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        // Change background color of specified grid item
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
            targetBlock.style.backgroundColor = color;
        } else {
            alert('Invalid block id! Please enter a number between 1 and 9.');
        }
    });

    resetButton.addEventListener('click', function() {
        // Reset all grid items' background color to transparent
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    });
});
