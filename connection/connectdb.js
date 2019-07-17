module.exports = {
  config: {
    server: 'hc-sysdev\\qa',
    database: 'EQM',
    user: 'qat',
    password: 'qapass1'
  },
  port: function() {
    var portdata = process.env.PORT || 5000;
    return portdata;
  }
};
