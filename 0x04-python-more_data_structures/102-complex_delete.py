#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    list_delete = []
    for key, key_value in a_dictionary.items():
        if key_value == value:
            list_delete.append(key)
    for x in list_delete:
        a_dictionary.pop(x, None)
    return a_dictionary
