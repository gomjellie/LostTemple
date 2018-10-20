# -*- coding: utf-8 -*-

from __future__ import absolute_import
import click

import lost_temple


@click.command()
@click.option("--source", "-s", default='./sources', multiple=True, help="path where .c files exits, default='./src'")
@click.option("--header", "-h", default="./headers", multiple=True, help="where .h files exits, default='./headers'")
@click.option("--target", "-t", default="./build", multiple=False, help="transpiled results will go here, default='./build'")
def transpile(source, header, target):
    """
    Example Usage

        >>> lost-temple --source="./sources" --header="./headers" target="./build"

    :return:
    """
    res = lost_temple.transpile(source, header, target)

    click.echo(res)

