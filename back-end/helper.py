from collections import defaultdict
def get_top_albums(songs):
    dict = {}
    # key is id, value is a dictionary that contains four keys, name, count, artist, and image
    for song in songs['items']:
        # print(f"\n\n\n {song['album']} \n\n\n")
        
        if song['album']['id'] in dict:
            dict[song['album']['id']]['count'] += 1
        else:
            dict[song['album']['id']] = {}
            dict[song['album']['id']]['count'] = 1
            dict[song['album']['id']]['name'] = song['album']['name']
            dict[song['album']['id']]['image'] = song['album']['images'][1]
            dict[song['album']['id']]['artist'] = song['artists'][0]['name']
    
    values = list(dict.values())
    sorted_values = sorted(values, key=lambda x: x['count'], reverse=True)
    
    return sorted_values[:23]
