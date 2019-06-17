
module.exports = {
  hello: (req, res, next) => {
    res.json({
      status: 'success',
      data: 'hello from server',
    });
  },
  todos: (req, res, next) => {
    res.json({
      status: 'success',
      data: [
        { key: 1, value: 'wash' },
        { key: 2, value: 'walk' },
        { key: 3, value: 'smear' },
        { key: 4, value: 'drink' },
      ],
    });
  },
};
