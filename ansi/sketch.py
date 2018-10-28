import time
import sys

for x in range (0,10):
	sys.stdout.flush()
	if x % 2 == 0:
		sys.stdout.flush()
		for i in range (0,20):
			for j in range(0,20):
				sys.stdout.write("|")
			sys.stdout.write("\n\r")
		sys.stdout.write("\r")
	else:
		sys.stdout.flush()
		for i in range (0,20):
			for j in range(0,20):
				sys.stdout.write("-")
			sys.stdout.write("\n\r")
		sys.stdout.write("\r")
	time.sleep(0.5)

