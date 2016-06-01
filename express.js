var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = React.createFactory(require('./Component'));


var app = express();

function home(req, res){
  var msg = req.params.msg || 'Hello';
  var comp = Component({msg:msg});

  /* React.renderToStaticMarkup has moved to ReactDOMServer.renderToStaticMarkup
  See http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup */
  res.send(ReactDOMServer.renderToStaticMarkup(comp));
}

app.get('', home);
app.get('/:msg', home)

app.listen(4000)
