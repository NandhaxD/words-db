import json
import random

def get_random_word():
    '''
    Objective: 
       Get a random word dict 
       from words database.
    output: 
       word dict 
    '''

    with open('./words.json') as f:
        words = json.load(f)
    random_word = random.choice(words)
    return random_word
