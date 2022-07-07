#!/usr/bin/python3
for i in range(ord('a'), ord('z')+1):
    Isaac = chr(i)
    if Isaac not in "qe":
        print("{:s}".format(Isaac), end="")
