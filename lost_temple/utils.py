import json
import os


def read_entry():
    config_file = os.path.join(os.getcwd(), '.lost_temple')

    if not os.path.isfile(config_file):
        return None

    with open(config_file) as f:
        data = json.load(f)

        return data

