# -*- coding: utf-8 -*-

from __future__ import absolute_import
import click

import lost_temple


@click.command()
@click.argument("source", nargs=1, default="./", type=click.Path(exists=True))
@click.argument("header", nargs=1, default="./", type=click.Path(exists=True))
@click.option('--target', '-o', default='./build', help='Who are you?')
def transpile(source, header, target):
    """
    Example Usage

        >>> lost-temple -o ./build   ./sources ./headers

    :return:
    """

    res = lost_temple.transpile(source, header, target)

    click.echo(res)

