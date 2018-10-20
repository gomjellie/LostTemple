import json
import os


def read_entry():
    """
    .lost_temple 설정 파일이 있으면 읽어서 딕셔너리를 리턴합니다.
    .lost_temple 설정 파일이 없을 경우 None 을 리턴 합니다.

    :return:
    e.g.)
    {
        "source": [
            "./sources"
        ],
        "header": [
            "./headers/"
        ],
        "target": [
            "./build"
        ]
    }
    """
    config_file = os.path.join(os.getcwd(), '.lost_temple')

    if not os.path.isfile(config_file):
        return None

    with open(config_file) as f:
        data = json.load(f)

        return data


def get_tree(parent_path, file_extension):
    """
    entry 안의 디렉토리 트리구조를 리턴합니다.
    https://stackoverflow.com/questions/9727673/list-directory-tree-structure-in-python 를 참고함.

    :param parent_path: 부모 디렉토리
    :param file_extension: 파일 확장자
    e.g.)
    ".c" , ".h"

    :return:
    e.g.)
    {
        './sources': ['./sources/protocol.c', './sources/sensor.c'],
        './sources/p': ['./sources/p/p.c'],
        './sources/p/k': []
    }
    """

    parent_path = parent_path[0]
    ret = { }

    for root, dirs, files in os.walk(parent_path):
        ret["{}".format(root)] = ["{}/{}".format(root, file) for file in files if os.path.splitext(file)[1] == file_extension ]

    return ret

