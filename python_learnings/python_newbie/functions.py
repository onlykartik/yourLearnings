def add1(a):
    """
    It will take a as int as argument and adds +1 to it
    """
    return a+1


def print_album_ratings(album_ratings):
    for i,rating in enumerate(album_ratings):
        print(i,"album rating ", rating)


# Collecting arguments

def ArtistName(*names):
    return names


print(add1(1))
albums_ratings = [10.0,8.5,9.5]
print(print_album_ratings(albums_ratings))
print(ArtistName("kartik","nalband saira","soumya"))
