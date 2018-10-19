import json
import os


def read_entry():
    print(os.getcwd())  # 현재 디렉토리의
    with open(os.path.join(os.getcwd(), '.lost_temple')) as f:
        data = json.load(f)

        return data
