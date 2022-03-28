from random import randint

moves = ["rock", "paper", "scissors"]

stats = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper",
}

play = True
while play == True:
  computer = moves[randint(0,2)]
  player = input("Rock, Paper, Scissors? ")

  player = player.lower()

  if player == "":
    print("ACTUALLY TYPE SOMETHING DOOFUS")
    continue
  try:
    int(player)
    print("THIS AIN'T A NUMBERS GAME!!!!!!!")
    continue
  except:
    pass
  if player not in moves:
    print("YOU'RE PLAYING ROCK PAPER SCISSORS! Pick an actual item that makes SENSE!")
    continue

  print("You have " + player)
  print("Computer has " + computer)

  if player == computer:
    print("Tie")
    continue
  
  if computer == stats[player]:
    print("You win!")
  else:
    print("Computer wins! :(")

  play = False