# -*- coding: utf-8 -*-
from __future__ import absolute_import

from pkg_resources import get_distribution

from lost_temple.api import print_string, login

__version__ = get_distribution('lost_temple').version

__all__ = [
    'print_string',
    'login',
]
