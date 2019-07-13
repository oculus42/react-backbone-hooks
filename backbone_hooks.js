// 0.2.1

import { useState } from 'react';

/**
 * Track changes to an entire model
 * @param {Backbone.Model} model
 * @return {Object}
 */
const useModel = (model) => {
  const [data, setState] = useState(model.toJSON());

  // TODO: Should this update only changedAttributes for change?
  model.on('change reset sync', () => setState(model.toJSON()));

  return data;
};

/**
 * Track changes to a key in a model
 * @param {Backbone.Model} model
 * @param {string} key
 * @return {*}
 */
const useModelKey = (model, key) => {
  const [data, setState] = useState(model.get(key));

  model.on(`change:${key} reset sync`, () => {
    const newValue = model.get(key);
    if (newValue === data) {
      return;
    }
    setState(newValue);
  });

  return data;
};

/**
 * Track changes to multiple keys in a model
 * @param {Backbone.Model} model
 * @param {string...} keys - One or more keys to watch on the model
 * @return {Object}
 */
const useModelKeys = (model, ...keys) => {
  const [data, setState] = useState(model.pick(...keys));

  // TODO: Isolate `change` to just affected keys?
  model.on('change reset sync', () => {
    setState(model.pick(...keys));
  });

  return data;
};

/**
 * Track changes to a Collection
 * @param {Backbone.Collection} collection
 * @return {*}
 */
const useCollection = (collection) => {
  const [data, setState] = useState(collection.toJSON());

  // TODO: Should this use collection.models instead?
  collection.on('add remove sort reset sync', () => setState(collection.toJSON()));

  return data;
};

export {
  useCollection,
  useModel,
  useModelKey,
  useModelKeys,
};
