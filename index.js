import { useState } from 'react';

const useModel = (model) => {
  const [data, setState] = useState(model.toJSON());

  model.on('change reset sync', () => setState(model.toJSON()));

  return data;
};

const useCollection = (collection) => {
  const [data, setState] = useState(collection.toJSON());

  collection.on('add remove sort reset sync', () => setState(collection.toJSON()));

  return data;
};

export {
  useCollection,
  useModel,
};
