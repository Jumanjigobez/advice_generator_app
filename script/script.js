const advice_box = document.getElementById("Advice"); 
const url = "https://api.adviceslip.com/advice";
//When the dice is clicked
getAdvice = () => {
	fetch(url).then(res => res.json())
	.then(data => {
		advice_box.innerHTML = 
		`
			 <div class="advice_id">
          		<h1>ADVICE #${data.slip.id}</h1>
        	</div>

        	<div class="advice">
          		<p><q>${data.slip.advice}</q></p>
        	</div>

        	<div class="divider">
         		<img src="images/pattern-divider-desktop.svg" alt="Divider line shape">
        	</div>

        	<div class="advice_btn">
          		<img src="images/icon-dice.svg" alt="Dice Icon" onclick="getAdvice();">
        	</div>
		`;
	});
}

//default show advice
fetch(url).then(res => res.json())
	.then(data => {
		advice_box.innerHTML = 
		`
			 <div class="advice_id">
          		<h2>ADVICE #${data.slip.id}</h2>
        	</div>

        	<div class="advice">
          		<p><q>${data.slip.advice}</q></p>
        	</div>

        	<div class="divider">
         		<img src="images/pattern-divider-desktop.svg" alt="Divider line shape">
        	</div>

        	<div class="advice_btn">
          		<img src="images/icon-dice.svg" alt="Dice Icon" onclick="getAdvice();">
        	</div>
		`;
	});
