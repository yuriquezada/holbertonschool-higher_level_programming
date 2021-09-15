#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    sorted_items = sorted(a_dictionary.items())
    for elem in sorted_items:
        print(elem[0], ':', elem[1])
