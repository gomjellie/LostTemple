import unittest

import lost_temple


class LostTemplePythonTest(unittest.TestCase):
    """
        Sample Test
    """

    def test_print_string(self):
        """
        Test result of python script lost_temple.print_string("print") equals "print"

        """

        self.assertEqual(lost_temple.print_string("print"), "print")

    def test_login(self):
        """
        Test result of python script lost_temple.login("adam", "smith") equals success dictionary

        """

        self.assertEqual(lost_temple.login("adam", "smith"), {
            'result': 'success',
            'msg': 'log in success',
            'status-code': 200,
        })

    def test_login_fail(self):
        """
        Test result of python script lost_temple.login("adam", "smith") equals success dictionary

        """

        self.assertNotEqual(lost_temple.login("black", "smith"), {
            'result': 'success',
            'msg': 'log in success',
            'status-code': 200,
        })


if __name__ == '__main__':
    unittest.main()
