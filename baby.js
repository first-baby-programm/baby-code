// Create a style element to add custom CSS
const style = document.createElement('style');
style.textContent = `
  #customGui {
    position: fixed;
    top: 100px;
    left: 100px;
    width: 300px;
    height: 200px;
    background-color: #1a1a1d;
    border: 2px solid #0f0f0f;
    color: #fff;
    border-radius: 10px;
    font-family: 'Arial', sans-serif;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  
  #customGuiHeader {
    background-color: #343a40;
    padding: 10px;
    cursor: move;
    border-radius: 10px 10px 0 0;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }
  
  #customGuiContent {
    padding: 20px;
    text-align: center;
  }
  
  #customGuiButton {
    background-color: #fca311;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  #customGuiButton:hover {
    background-color: #e89c0c;
  }
`;
document.head.appendChild(style);

// Create the GUI container
const guiContainer = document.createElement('div');
guiContainer.id = 'customGui';
document.body.appendChild(guiContainer);

// Create the header (draggable)
const guiHeader = document.createElement('div');
guiHeader.id = 'customGuiHeader';
guiHeader.textContent = 'Bloxflip GUI';
guiContainer.appendChild(guiHeader);

// Create the content section
const guiContent = document.createElement('div');
guiContent.id = 'customGuiContent';
guiContainer.appendChild(guiContent);

// Add a button inside the content section
const guiButton = document.createElement('button');
guiButton.id = 'customGuiButton';
guiButton.textContent = 'Skibidi';
guiContent.appendChild(guiButton);

// Add functionality to the button
guiButton.addEventListener('click', () => {
  alert('Button clicked!');
});

// Make the GUI draggable
let isDragging = false;
let xOffset = 0;
let yOffset = 0;

guiHeader.addEventListener('mousedown', (e) => {
  isDragging = true;
  xOffset = e.clientX - guiContainer.offsetLeft;
  yOffset = e.clientY - guiContainer.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    guiContainer.style.left = `${e.clientX - xOffset}px`;
    guiContainer.style.top = `${e.clientY - yOffset}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
