#!/usr/bin/python3
def square_matrix_simple(matrix=[[]]):
    new_matrix = []
    for element in matrix:
        new_matrix.append(list(map(lambda x: x * x, element)))
    return new_matrix
