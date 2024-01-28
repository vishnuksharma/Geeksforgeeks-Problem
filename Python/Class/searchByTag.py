import json
from re import search


class SearchByTag:

    def __init__(self, data_file, query_tag):
        # with open(data_file) as data_file:
            # self._data = json.load(data_file)
        self._data = json.loads(data_file)
        self.query = query_tag

    def search(self):
        if not self.query or not self._data:
            raise StopIteration
        
        try:
            self._data['items']
        except KeyError:
            raise StopIteration
    
        for item in self._data['items']:
            if not item:
                raise StopIteration
            
            thing = item.get('tags', None)
            
            if not thing:
                continue
            
            if self.query in thing:
                yield item
    

    def first(self):
        return self.search().__next__()


jsonData = '{ "items": [{ "name": "test", "tags": ["comedy", "drama"]}]}'
loadData = json.loads(jsonData)



searchTag =  SearchByTag(jsonData, 'drama')

print(searchTag.first())