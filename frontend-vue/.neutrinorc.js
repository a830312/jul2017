module.exports = {
  use: [
    [ 'neutrino-preset-web', {
      hot: true,
      html: {
        appMountId: 'root',
      },
    } ],
    [ 'neutrino-preset-vue', {} ],
  ],
}
