#!/usr/bin/env python3
"""
script lists all documents in a collection
"""


def list_all(mongo_collection):
    """
    list all documents in Python
    """
    if mongo_collection is None:
        return []
    return mongo_collection.find()
