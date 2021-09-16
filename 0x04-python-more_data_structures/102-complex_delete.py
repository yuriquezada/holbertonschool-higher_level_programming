#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    for key, value_k in a_dictionary.items():
      if value_k == value:
        a_dictionary.pop(key, None)
        break
    return a_dictionary
