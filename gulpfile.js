var elixir = require('laravel-elixir')

elixir(function(mix) {

  mix.less('ui-package.less');
  mix.rollup('ui-package.js');

});