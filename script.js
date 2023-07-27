 let currentColor = 0;
 const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0'];

 function changeBackgroundColor() {
     currentColor = (currentColor + 1) % colors.length;
     document.body.style.backgroundColor = colors[currentColor];
 }
