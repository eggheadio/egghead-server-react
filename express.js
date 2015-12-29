var express = require('express');
var React = require('react');
var Component = React.createFactory(require('./Component'));


var app = express();

function home(req, res){
  var msg = req.params.msg || 'Hello';
  var comp = Component({msg:msg});
  res.send(ReactDOM.renderToStaticMarkup(comp));
}

app.get('', home);
app.get('/:msg', home)

app.listen(4000)
