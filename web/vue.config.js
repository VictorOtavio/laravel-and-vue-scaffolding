module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Laravel and Vue Scaffolding";
      return args;
    });
  },
};
