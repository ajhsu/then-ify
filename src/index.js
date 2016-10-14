const thenable = (func) => {
  return (result) => {
    func(result);
    return Promise.resolve(result);
  }
};

export default thenable;