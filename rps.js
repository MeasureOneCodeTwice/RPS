main()
function get_computer_choice()
{
	return Math.floor(Math.random()*3)
}

function get_user_input()
{
	return "Rock"
}

function play_round()
{
	const map = new Map()
	map.set("rock", 0)
	map.set("paper", 1)
	map.set("scissors", 2)

	const comp_choice = get_computer_choice()
	const user_choice = map.get(get_user_input().toLowerCase())


	if(comp_choice == user_choice)
		return "draw"
	if(comp_choice > user_choice &&
		!(user_choice == 0 && comp_choice == 2))
		return "computer wins"

	return "player wins"
}

function main()
{
	for(i = 0; i < 5; i++) 
	{
		console.log(play_round())
	}
}
