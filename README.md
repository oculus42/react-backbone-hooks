# react-backbone-hooks
React Hooks for Legacy Backbone Data

The goal of this library is to provide a very simple interface for updating React components 
when Backbone data sources change. This will hopefully speed the transition of legacy apps 
from Backbone to React.

## Interface
The library provides four methods:

* `useCollection(collection)` - Listen for changes to a Collection
* `useModel(model)` - Listen for changes to a Model
* `useModelKey(model, key)` - Listen for changes to one key in a Model
* `useModelKeys(model, ...keys)` - Listen for changes to one or more keys in a Model

## Caveats
This has not been thoroughly tested and may not work as expected. 
Please report any bugs and I will will do my best to update this library in a timely fashion.
