#!/usr/bin/env python3
'''yes yes yo'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''func that takes a multiplier and applies it to function'''
    def multiplier_function(value: float) -> float:
        '''return the product of a float and a multiplier'''
        return value * multiplier
    return multiplier_function
