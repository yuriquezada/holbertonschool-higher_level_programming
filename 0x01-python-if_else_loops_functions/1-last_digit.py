#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
negativeNumber = 0
if number < 0:
	negativeNumber = number
	number *= -1
lastDigit = number % 10
if negativeNumber < 0:
	number *= -1
	lastDigit *= -1
if lastDigit > 5:
	print("Last digit of {:d} is {:d} and is greater than 5".format(number, lastDigit))
elif lastDigit == 0:
	print("Last digit of {:d} is {:d} and is 0".format(number, lastDigit))
else:
	print("Last digit of {:d} is {:d} and is less than 6 and not 0".format(number, lastDigit))
