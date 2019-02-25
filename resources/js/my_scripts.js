/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];



/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function updateValueByNumBounded(changeBy){
		var number = document.getElementById("changeNumberBounded").innerHTML;//retrieve the current number
		number= parseInt(number) + changeBy;//Increase/Decrease by passed in parameter.
		if(number > 10)
		{//Ensure we don't go above 10
			number = 10;
		}
		else if(number < -10)
		{//Ensure we don't go below -10
			number = -10;
		}
		document.getElementById("changeNumberBounded").innerHTML = number;//Update to show the new number value
	}

function viewStudentStats(underOrGrad, val){
	if(val){
		document.getElementById(underOrGrad).style.visibility = 'visible';
	}else{
		document.getElementById(underOrGrad).style.visibility = 'hidden';
	}
}


function changeColor(color)
{
	document.body.style.backgroundColor = color;
}

function changeColorbyID(color)
{
	document.getElementById('htmlBody').style.background = color
}



/*function randomImage(){
		document.getElementById("stats_table").onload = null;//The onload is called once an image has been rendered. Without this line of code
															 //Our webpage will cycle through our images in an endless loop!  For the body tag
															 //this isn't necessary.
		var pickImage = Math.floor((Math.random() * 10) / 3);//Pick a random number between 0 and 3
		if(pickImage == 0)
		{
			document.getElementById("practiceImg").src= "img/tree.jpg"; //Source: https://www.gograph.com/vector-clip-art/tree-roots.html
		}
		else if(pickImage == 1)
		{
			document.getElementById("practiceImg").src= "img/sun.jpg"; //Source: https://www.gograph.com/vector-clip-art/sun.html
		}
		else
		{
			document.getElementById("practiceImg").src= "img/moon.jpg"; //Source: //Source: https://www.gograph.com/vector-clip-art/moon.html
		}

}*/



function loadStatsPage(){
		document.getElementById("stats_table").onload = null;
		var table = document.getElementById("stats_table");//Retrieve our table element
		var row_counter;//Keeps track of our row index
		var col_counter;//Keeps track of our column index
		var cell_value;
		var cuBuffs = 'CU Buffs';
		var wins= 0;
		var losses=0;
		for(row_counter = 2; row_counter < table.rows.length; row_counter++)
		{//Outer for loop iterates over each row
			for(col_counter = 2; col_counter < 4; col_counter++)
			{
				//cell_value = table.rows[row_counter].cells[col_counter].innerHTML;//Read in a cells current value
				cell_value = Math.floor((Math.random() * (100 - 0) + 0));
				console.log("cell_value: " + cell_value);
				console.log(table.rows[row_counter].cells[col_counter].innerHTML);
				table.rows[row_counter].cells[col_counter].innerHTML = cell_value;//Update the actual html of the cell
				console.log("col_counter: " + col_counter);
				if(col_counter == 3){
					console.log("1: " + table.rows[row_counter].cells[col_counter].innerHTML);
					if(table.rows[row_counter].cells[col_counter].innerHTML > table.rows[row_counter].cells[col_counter-1].innerHTML){//opponent win
						table.rows[row_counter].cells[col_counter+1].innerHTML = table.rows[row_counter].cells[col_counter-2].innerHTML;//Update the actual html of the cell
						losses++;
					}else{//home win
						table.rows[row_counter].cells[col_counter+1].innerHTML = cuBuffs;
						wins++;
					}
				}
			}
			
		}
		table = document.getElementById("wins");
		table.innerHTML = wins;
		table = document.getElementById("losses");
		table.innerHTML = losses;
		console.log("wins: "+ wins.toString());
		console.log("losses: "+ losses.toString());
	}
var player_index = 0;//Global variable!
	function loadPlayersPage(){
		players = [{player_name: 'Jeremy Renner', p_year:'red',p_major : 'Biochem' ,g_played: '69',player_img: 'https://pixels.com/featured/american-football-running-back-ball-cartoon-aloysius-patrimonio.html' , p_yards: '45' , r_yards: '238', rec_yards: '85' ,avg_p_yards: '34', avg_r_yards:'43', avg_rec_yards'34'},
				 {player_name: 'Henriette Lievit', p_year:'blue',p_major : 'Math' ,g_played: '63',player_img: 'https://www.vectorstock.com/royalty-free-vector/american-football-wide-receiver-running-ball-vector-1878129' , p_yards: '34' , r_yards: '3454', rec_yards: '345' ,avg_p_yards: '33', avg_r_yards:'23', avg_rec_yards'85'},
				 {player_name: 'Mr. Bean', p_year:'green',p_major : 'Biochem' ,g_played: '69',player_img: 'https://www.lequzhai.com/group/how-to-draw-a-cartoon-football-player/' , p_yards: '45' , r_yards: '238', rec_yards: '85' ,avg_p_yards: '34', avg_r_yards:'43', avg_rec_yards'34'},
				 {player_name: 'Jeremy Renner', p_year:'red',p_major : 'Biochem' ,g_played: '69',player_img: 'https://www.istockphoto.com/vector/tailback-football-player-running-gm156612456-9373424' , p_yards: '45' , r_yards: '238', rec_yards: '85' ,avg_p_yards: '34', avg_r_yards:'43', avg_rec_yards'34'}];

		document.getElementById('player_selector').innerHTML = players[player_index].player_name;
		document.getElementById('p_major').innerHTML = players[player_index].p_year;
		document.getElementById('g_played').innerHTML = players[player_index].g_played;
		//document.getElementById('g_played').innerHTML = players[player_index].g_played;
		player_index++;
		if(player_index >= players.length)//If we've gone too far, reset the index to 0.
		{
			player_index = 0;
		}
	}

/*
/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/


/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none
			
			purpose: This method will populate the dropdown menu to allow the 
					 user to select which player's information to view.
					 
					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the 
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method 
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.
						
					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.
		
		switchPlayers(playerNum) method:
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
				

