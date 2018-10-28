from blessings import Terminal
from time import sleep
import os


cigLength = 15
paperSize = cigLength
emberSize = 1
term = Terminal()

while True:
	paper=""
	ember=""
	if paperSize > 0 and emberSize < cigLength:
		for x in range(0, paperSize):
			paper+=" "
		
		for x in range(0, emberSize):
			ember+=" "
		paperSize-=1
		emberSize+=1


	with term.location():
		# print(term.move(4, 3) + '{t.underline}                       '.format(t=term))
		# print(term.move(5, 3) + term.on_yellow+ '         ' + term.on_white+'             '+term.on_red+' '.format(t=term))
		print('\r')
		print('\r')
		print('\r')
		print('\r')
		print('\r')
		print('\r')
		print(term.move(5, 3) + term.on_yellow+ '         ' + term.on_white+paper+term.on_red+'  '.format(t=term))

	if emberSize == cigLength:
		# os.system("clear")
		paperSize = cigLength
		emberSize = 1

	sleep(0.1)