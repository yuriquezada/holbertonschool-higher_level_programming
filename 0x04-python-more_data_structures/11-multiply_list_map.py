#!/usr/bin/python3
def multiply_list_map(my_list=[], number=0):
    # my_list = [1, 2, 3, 4, 6]
    new_list = list(map(lambda x: x * number, my_list))
    return new_list
