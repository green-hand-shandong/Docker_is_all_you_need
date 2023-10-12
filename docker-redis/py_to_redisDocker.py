from redis import Redis

# localhost 
# r = Redis(host='localhost', port=6379, decode_responses=True)

# docker :  redis://default:redispw@localhost:49154
r = Redis(host='localhost', port=49154, password='redispw')
print("hello, ", r.ping())

