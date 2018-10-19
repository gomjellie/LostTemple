import unittest
from click.testing import CliRunner

import lost_temple


class LostTempleCliTest(unittest.TestCase):
    def setUp(self):
        self.runner = CliRunner()

    @classmethod
    def output2str(cls, output):
        return str(output.encode('ascii', 'ignore').decode("utf-8")).replace('\n', '')

    def test_single_print(self):
        """
        Test output of CLI Command temple single_print --string="hello" equals "hello"

        """

        result = self.runner.invoke(lost_temple.cli.single_print, ["--string", "hello"])
        self.assertEqual(
            self.output2str(result.output),
            "hello",
        )

    def test_multiple_print(self):
        """
        Test output of CLI Command temple multiple_print --string="hello" --string="world" equals "hello world"

        """

        result = self.runner.invoke(lost_temple.cli.multiple_print, ["--string", "hello", "--string", "world"])
        self.assertEqual(
            self.output2str(result.output),
            "hello world",
        )

    def test_multiple_print_with_various_option(self):
        """
        Test output of CLI Command temple multiple_print --string="hello" -sworld equals "hello world"

        """

        result = self.runner.invoke(lost_temple.cli.multiple_print, ["--string", "hello", "-s", "world"])
        self.assertEqual(
            self.output2str(result.output),
            "hello world",
        )

    def test_login_success(self):
        """
        Test output of CLI Command temple login --id="adam" --password="smith" return success dictionary

        """

        result = self.runner.invoke(lost_temple.cli.login, ["--id", "adam", "--password", "smith"])
        self.assertEqual(
            self.output2str(result.output),
            str({
                'result': 'success',
                'msg': 'log in success',
                'status-code': 200,
            })
        )

    def test_login_fail(self):
        """
        Test output of CLI Command temple login --id="black" --password="smith" return fail dictionary

        :return:
        """
        result = self.runner.invoke(lost_temple.cli.login, ["--id", "black", "--password", "smith"])
        self.assertEqual(
            self.output2str(result.output),
            str({
                'result': 'fail',
                'msg': 'login failed!',
                'status-code': 500,
            })
        )


if __name__ == '__main__':
    unittest.main()
