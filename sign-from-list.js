const container = document.getElementById('gridContainer');
fetch('./sign-data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
	  const div = document.createElement('div');
	  const textContainer = document.createElement('div');
	  const symbolContainer = document.createElement('div');
	  const signText = document.createElement('div');
      div.className = 'signContainer';
	  textContainer.className = 'textContainer';
	  symbolContainer.className = 'symbolContainer'; 
	  signText.className = 'signText'; 

      // Add image if imageUrl is provided
      if (item.imageUrl) {
        const img = document.createElement('img');
        img.src = item.imageUrl;
		img.width = 142;
        img.alt = item.text;
        symbolContainer.appendChild(img);
      }
	  
	  // Write text
      signText.textContent = item.text;
	  signText.style.fontWeight = 'bold';
      
	  // Set style
	  textContainer.style.backgroundColor = item.bgColor;
      signText.style.color = item.textColor;
	  
	  // Assemble and append to grid
	  div.appendChild(textContainer);
	  div.appendChild(symbolContainer);
	  textContainer.appendChild(signText);
	  container.appendChild(div);
    });
  });