const Router = require('express').Router;
const routes = Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post('/', multer(multerConfig).single('file'), (req, res) => {
    var spawn = require('child_process').spawn;
    var ls = spawn('C:/Users/higor/Desktop/backend-data-analytics/launch.bat');
    var dataString = '';

    ls.stdout.on('data', function (data) {
        dataString += data.toString();
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        res.json({dataString});
    });

    /*
   //"%OSGEO4W_ROOT%"\apps\Python37\python "C:\Users\higor\Desktop\backend-data-analytics\tmp\script-qgis.py"
    var spawn = require('child_process').spawn,
    py = spawn('C:/Program Files/QGIS 3.18/apps/Python37/python', ['tmp/script-qgis.py']),
    dataString = '';

    py.stdout.on('data', function(data){
        dataString += data.toString();
    });
    
    py.stdout.on('end', function(){
        console.log('aqui', dataString);
    });
*/
    
});

module.exports = routes