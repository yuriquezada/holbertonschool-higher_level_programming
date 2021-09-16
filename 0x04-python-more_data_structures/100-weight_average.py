def weight_average(my_list=[]):
    if my_list == []:
        return 0
    add_numerator = 0
    add_denominator = 0
    for elem in my_list:
        elem_to_list = list(elem)
        product = elem[0] * elem[1]
        add_numerator += product
        add_denominator += elem[1]
    average = add_numerator / add_denominator
    return average
