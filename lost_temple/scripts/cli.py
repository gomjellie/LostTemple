# -*- coding: utf-8 -*-

from __future__ import absolute_import
import click

import lost_temple


@click.command()
@click.argument("source", nargs=1, default="./sources")
@click.argument("header", nargs=1, default="./headers")
@click.argument("target", nargs=1, default="./build")
def transpile(source, header, target):
    """
    Example Usage

        >>> lost-temple --source="./sources" --header="./headers" target="./build"

    :return:
    """
    res = lost_temple.transpile(source, header, target)

    click.echo(res)

