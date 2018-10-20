# -*- coding: utf-8 -*-

from __future__ import absolute_import
import click

import lost_temple


@click.command()
@click.argument("entry", nargs=1, default="./", type=click.Path(exists=True))
@click.option('--target', '-o', default='./build', help='Who are you?')
def transpile(entry, target):
    """
    Example Usage

        >>> lost-temple -o ./build  .

    :return:
    """

    res = lost_temple.transpile(entry, target)

    click.echo(res)

