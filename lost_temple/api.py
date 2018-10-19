"""
    API HERE
"""


def print_string(example_string):
    """
    after checking example_string type, just print example_string out
    :param example_string: put any string you want
    :type example_string: str
    :return:
    """
    if type(example_string) not in [str]:
        raise ValueError("print_string() got wrong arguments example_string")

    print(example_string)
    return example_string


def login(id, password):
    """
    only when id == adam && password == smith -> return True
    else return False
    :type id: str
    :type password: str
    :return:
    """

    if id == 'adam' and password == 'smith':
        return {
            'result': 'success',
            'msg': 'log in success',
            'status-code': 200,
        }

    else:
        return {
            'result': 'fail',
            'msg': 'login failed!',
            'status-code': 500,
        }

