@echo off
SET OSGEO4W_ROOT=C:\Program Files\QGIS 3.18
call "%OSGEO4W_ROOT%"\bin\o4w_env.bat
call "%OSGEO4W_ROOT%"\bin\qt5_env.bat
call "%OSGEO4W_ROOT%"\bin\py3_env.bat
call "%OSGEO4W_ROOT%"\apps\grass\grass78\etc\env.bat
path %PATH%;%OSGEO4W_ROOT%\apps\qgis\bin
path %PATH%;%OSGEO4W_ROOT%\apps\qgis\python\plugins
path %PATH%;%OSGEO4W_ROOT%\apps\grass\grass78\lib
path %PATH%;%OSGEO4W_ROOT%\apps\grass\grass78\bin
set PYTHONPATH=%PYTHONPATH%;%OSGEO4W_ROOT%\apps\qgis\python;
set PYTHONPATH=%PYTHONPATH%;%OSGEO4W_ROOT%\apps\Python37\Lib\site-packages
set QGIS_PREFIX_PATH=%OSGEO4W_ROOT%\apps\qgis\

set GDAL_FILENAME_IS_UTF8=YES
set VSI_CACHE=TRUE
set VSI_CACHE_SIZE=1000000
set QT_PLUGIN_PATH=%OSGEO4W_ROOT%\apps\qgis\qtplugins;%OSGEO4W_ROOT%\apps\qt5\plugins
@echo off
"%OSGEO4W_ROOT%"\apps\Python37\python "tmp\script-qgis.py"