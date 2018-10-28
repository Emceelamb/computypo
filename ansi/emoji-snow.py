from blessings import Terminal
from time import sleep
from random import choice
from random import randint
import os

# os.system("clear")
emojis = ["🐷","❗","♿","🚿","🤦‍","🙇‍","👬","👨‍🎓","😪","😬","😝","👤","🙌","😀","💩","😅","😎","😇","😈","😍","👽","😖","😥","😛","😴","😐","🤔","👦","👩","🙋‍","👋","👯‍"," 👍"]

term = Terminal()
height = term.height
width = term.width

while True:
    emo = choice(emojis)
    emoY = randint(1,18)
    emoX = randint(1,70)

    with term.location():
	    print(term.move(emoY,emoX)+emo)
    sleep(0.1)