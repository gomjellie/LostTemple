"""
    API HERE
"""
from .utils import read_entry, get_tree

def transpile(header_path="./headers", source_path="./sources", target_path="./build"):
    """

    :param header_path:
    e.g.) "./headers"
    :param source_path:
    e.g.) "./sources"
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
    │   ├── protocol.h
    │   └── sensor.h
    └── sources
        ├── protocol.c
        └── sensor.c

    :return:
    """

    entry = read_entry()

    if entry:
        source_path = entry["source"]
        header_path = entry["header"]
        target_path = entry["target"]

    return get_tree(source_path, ".c")

    header_res = transpile_header(header_path, target_path)
    source_res = transpile_source(source_path, target_path)

    return {
        "header_res": header_res,
        "source_res": source_res,
    }


def transpile_header(header_path, target_path):
    """
    path_name 안의 모든 .h 파일을 트랜스파일 합니다.

    :param header_path: 헤더 경로이름
    e.g.) ./headers/
    :param target_path: 트랜스파일된 결과물이 이동할 위치
    e.g.) ./build

    :result:
    e.g.)
    .
    ├── build
    │   ├── headers
    │   │   ├── protocol.h
    │   │   └── sensor.h
    └── headers
        ├── protocol.h
        └── sensor.h

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
        ├── protocol.c
        └── sensor.c

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
