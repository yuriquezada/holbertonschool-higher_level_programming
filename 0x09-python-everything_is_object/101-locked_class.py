#!/usr/bin/python3
"""class LockedClass"""


class LockedClass:
    """A locked class that only lets the user create a instance attribute"""
     __slots__ = ['first_name']
