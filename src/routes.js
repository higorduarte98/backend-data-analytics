const Router = require('express').Router;
const routes = Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post('/', multer(multerConfig).single('file'), (req, res) => {
    var spawn = require('child_process').spawn;
    var ls = spawn('cmd.exe', ['C:\\Users\\higor\\Desktop\\backend-data-analytics\\launch.bat']);
    
    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });



    /*
    var spawn = require('child_process').spawn,
    py = spawn('C:/Program Files/QGIS 3.18/apps/Python37/python', ['tmp/script-qgis.py']),
    dataString = '';
    spawn('launch.bat', [])

    py.stdout.on('data', function(data){
        dataString += data.toString();
    });
    
    py.stdout.on('end', function(){
        console.log('aqui', dataString);
    });
*/
    res.json({a: 'sdsad'});
});

module.exports = routes