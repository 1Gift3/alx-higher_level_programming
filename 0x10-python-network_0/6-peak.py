#!/usr/bin/python3
"""find peak function algorithm"""


def find_peak(list_of_integers):
    """A function that finds a peak in a list of unsorted integers of an array"""
    prev = 0
    for i, number in enumerate(list_of_integers):
        if i:
            prev = list_of_integers[i - 1]
        if i < len(list_of_integers) - 1:
            next = list_of_integers[i + 1]
        else:
            next = 0
        if number >= prev and number >= next:
            return number
