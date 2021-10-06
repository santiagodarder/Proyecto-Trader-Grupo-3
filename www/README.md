git add . //agrega todo lo nuevo 

Tarea de Git	Notas	Comandos de Git
Dile a Git quien eres	Configure el nombre del autor y la dirección de correo electrónico que se utilizarán con sus confirmaciones.
Tenga en cuenta que Git quita algunos caracteres (por ejemplo, puntos finales) de user.name.

git config --global user.name "Sam Smith"
git config --global user.email sam@example.com

Crea un nuevo repositorio local	 	
git init
Echa un vistazo a un repositorio	Cree una copia de trabajo de un repositorio local:	
git clon / ruta / a / repositorio
Para un servidor remoto, use:	
git clone username @ host: / ruta / a / repositorio
Agregar archivos	Agregue uno o más archivos a la preparación (índice):	
git add <nombre de archivo>

git agregar *
Cometer	Confirme los cambios en el encabezado (pero aún no en el repositorio remoto):	
git commit -m "Confirmar mensaje"
Confirme los archivos que haya agregado git addy también confirme los archivos que haya cambiado desde entonces:	
git commit -a
Empujar	Envíe los cambios a la rama maestra de su repositorio remoto:	
maestro de origen de git push
Estado	Enumere los archivos que ha cambiado y los que aún necesita agregar o confirmar:	
estado de git
Conectarse a un repositorio remoto	Si no ha conectado su repositorio local a un servidor remoto, agregue el servidor para poder enviarlo:	git remote add origin <server>
Enumere todos los repositorios remotos configurados actualmente:	git remote -v
Sucursales	Cree una nueva rama y cámbiela a ella:	
git checkout -b <nombre de la sucursal>
Cambiar de una rama a otra:	
git checkout <nombre de la sucursal>
Enumere todas las sucursales en su repositorio y también le diga en qué sucursal se encuentra actualmente:	
rama de git
Eliminar la rama de función:	
git branch -d <nombre de la sucursal>
Empuje la rama a su repositorio remoto, para que otros puedan usarla:	
git push origin <nombre de la sucursal>
Empuje todas las ramas a su repositorio remoto:	
git push --todos los orígenes
Elimina una rama en tu repositorio remoto:	
origen de git push: <nombre de la sucursal>
Actualización desde el repositorio remoto	Obtenga y combine los cambios en el servidor remoto en su directorio de trabajo:	git pull
Para fusionar una rama diferente en su rama activa:	
git merge <branchname>
Ver todos los conflictos de fusión:
Ver los conflictos contra el archivo base:

Obtenga una vista previa de los cambios antes de fusionar:

git diff
git diff --base <filename>

git diff <rama de origen> <rama de destino>
Una vez que haya resuelto manualmente los conflictos, marque el archivo modificado:	
git add <nombre de archivo>
Etiquetas	Puede utilizar el etiquetado para marcar un conjunto de cambios significativo, como una versión:	
etiqueta git 1.0.0 <commitID>
CommitId son los caracteres principales del ID del conjunto de cambios, hasta 10, pero deben ser únicos. Obtenga la identificación usando:	
registro de git
Envíe todas las etiquetas al repositorio remoto:	
git push - origen de etiquetas
Deshacer cambios locales	Si se equivoca, puede reemplazar los cambios en su árbol de trabajo con el último contenido en el encabezado:
Se conservarán los cambios que ya se hayan agregado al índice, así como los archivos nuevos.

git checkout - <nombre de archivo>
En su lugar, para eliminar todos los cambios y confirmaciones locales, obtener el historial más reciente del servidor y apuntar a su rama maestra local, haga esto:	
origen de git fetch

git reset - origen duro / maestro
Buscar	Busque en el directorio de trabajo foo():	git grep "foo()"
