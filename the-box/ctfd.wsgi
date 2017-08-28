import sys
sys.path.insert(0, '/var/www/the-box')

from CTFd import create_app
application = create_app()
