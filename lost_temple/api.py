"""
    API HERE
"""
from .utils import read_entry, get_tree
import pprint

pp = pprint.PrettyPrinter(indent=4)


def transpile(entry, target_path="./build"):
    """

    :param entry:
    e.g.) "./"
    :param target_path:
    e.g.) "./build"

    result:
    e.g.)
    .
    ├── build
    │   ├── headers
    │   │   ├── protocol.h
    │   │   └── sensor.h
    │   └── sources
    │       ├── protocol.c
    │       └── sensor.c
    ├── headers
    │   ├── protocol.hat
    │   └── sensor.hat
    └── sources
        ├── protocol.cat
        └── sensor.cat

    :return:
    """

    config = read_entry()

    if config:
        # .lost_temple 설정 파일이 있으면 설정 파일을 따른다.
        target_path = config["target"]
        entry = config["entry"]

    source_res = {}
    header_res = {}

    if type(entry) is str:
        source_res[entry] = transpile_source(entry, target_path)
    elif type(entry) is list:
        for s in entry:
            source_res[s] = transpile_source(s, target_path)
    else:
        raise TypeError(
            "transpile() got param entry as type {} which expected [str, list]".format(type(entry)))

    if type(entry) is str:
        header_res[entry] = transpile_header(entry, target_path)
    elif type(entry) is list:
        for h in entry:
            header_res[h] = transpile_header(h, target_path)
    else:
        raise TypeError(
            "transpile() got param entry as type {} which expected [str, list]".format(type(entry)))

    return {
        "header_res": header_res,
        "source_res": source_res,
    }


def transpile_header(header_path, target_path):
    """
    path_name 안의 모든 .h 파일을 트랜스파일 합니다.

    :param header_path: 헤더 경로이름 list or string
    e.g.) "./headers"
    :param target_path: 트랜스파일된 결과물이 이동할 위치
    e.g.) "./build"

    :result:
    e.g.)
    .
    ├── build
    │   ├── headers
    │   │   ├── protocol.h
    │   │   └── sensor.h
    └── headers
        ├── protocol.hat
        └── sensor.hat

    :return: [
        {
            "file_name": "./headers/protocol.h",
            "status": "FAIL",
            "errors": [
                {
                    "location": "25:14",
                    "error": "unknown symbol { found",
                    "solution": "remove brace",
                },
                {
                    "location": "38: 5",
                    "error": "unknown symbol } found",
                    "solution": "remove brace",
                },
            ],
        },
        {
            "file_name": "./headers/sensor.h",
            "status": "SUCCESS",
            "errors": None,
        },
    ]
    """

    print("header_path: {}".format(header_path))
    header_tree = get_tree(header_path, ".hat")
    print("header_tree: ")
    pp.pprint(header_tree)

    ret = [
        {
            "file_name": "./headers/protocol.h",
            "status": "FAIL",
            "errors": [
                {
                    "location": "25:14",
                    "error": "unknown symbol { found",
                    "solution": "remove brace",
                },
                {
                    "location": "38: 5",
                    "error": "unknown symbol } found",
                    "solution": "remove brace",
                },
            ],
        },
        {
            "file_name": "./headers/sensor.h",
            "status": "SUCCESS",
            "errors": None,
        },
    ]

    return ret


def transpile_source(source_path, target_path):
    """
    path_name 안의 모든 .c 파일을 트랜스파일 합니다.

    :param source_path: 경로이름
    e.g.) ./sources/
    :param target_path: 트랜스파일된 결과물이 이동할 위치
    e.g.) ./build
    :result:
    e.g.)
    .
    ├── build
    │   ├── sources
    │   │   ├── protocol.c
    │   │   └── sensor.c
    └── sources
        ├── protocol.cat
        └── sensor.cat

    :return: [
        {
            "file_name": "./sources/protocol.c",
            "status": "FAIL",
            "errors": [
                {
                    "location": "25:14",
                    "error": "unknown symbol { found",
                    "solution": "remove brace",
                },
                {
                    "location": "38: 5",
                    "error": "unknown symbol } found",
                    "solution": "remove brace",
                },
            ],
        },
        {
            "file_name": "./sources/sensor.c",
            "status": "SUCCESS",
            "errors": None,
        },
    ]
    """

    print("source_path: {}".format(source_path))
    source_tree = get_tree(source_path, ".cat")
    print("source_tree: ")
    pp.pprint(source_tree)

    ret = [
        {
            "file_name": "./sources/protocol.c",
            "status": "FAIL",
            "errors": [
                {
                    "location": "25:14",
                    "error": "unknown symbol { found",
                    "solution": "remove brace",
                },
                {
                    "location": "38: 5",
                    "error": "unknown symbol } found",
                    "solution": "remove brace",
                },
            ],
        },
        {
            "file_name": "./sources/sensor.c",
            "status": "SUCCESS",
            "errors": None,
        },
    ]

    return ret
