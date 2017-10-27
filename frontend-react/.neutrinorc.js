module.exports = {
  use: [
    [
      'neutrino-preset-react', {
        "hot": true,
        "html": {
          "appMountId": "root"
        }
      }
    ],
    'override.js',
    (neutrino) => neutrino.config
      .entry('vendor')
        .add('react')
        .add('react-dom')
  ]
};