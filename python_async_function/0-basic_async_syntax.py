#!/usr/bin/env python3
"""
module for the delay
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """waits for a random delay between 0 and max_delay"""
    ran_wait = random.uniform(0, max_delay)
    await asyncio.sleep(ran_wait)
    return ran_wait
