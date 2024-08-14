#!/usr/bin/env python3
'''yes yes yo'''
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    '''adds all elements of an input list that
    can be composed of ints or floats'''
    return sum(mxd_lst)
