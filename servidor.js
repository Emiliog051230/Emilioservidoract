//Escribe un comentario explicando para qué sirve http
// Sirve para crear la comunicacion entre navegador y servidor.
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
// sirve para interactuar con el sisstema de archivos
import fs from 'fs';
import { stringify } from 'querystring';


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       
      
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
           // Significa que hay un error en servidor
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        // Significa que fue un exito
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de los usuarios
    function getUsuarios(req, res) {
        //Esto representa un objeto JSON de un usuario
        //Agrega otro usuario
        const usuarios = [
          {
            "nombre": "Punk",
            "saldo": "0",
          },
          {
            "nombre": "Emilio",
            "saldo": "100",
          }
        ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      // convierte un objeto o un valor en una cadena de texto
      res.end(JSON.stringify(usuarios));
    }

  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    function mostrarUsuarios(req, res) {
        fs.readFile('usuarios.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
           res.end(data);
        });
      }

     
      function mostrarMovimientos(req, res) {
        //Construye una página básica movimientos.html
        fs.readFile('movimientos.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }
        function mostrarEquipo(req, res){
      fs.readFile('equipo.html', 'utf-8',(error,data) =>{
        if (error){
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Oh-no!!!');
          return;
        }
          res.writeHead(200,{'Content-Type': 'text/html'})
          res.end(data);
         });
      }
      function mostrarOpinion(req, res) {
  fs.readFile('opinion.html', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Oh no!!!!');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

    //Esta función deberá enviar un json con los datos de las movimientos
    function getMovimientos(req, res) {
      const movimientos =[
        {
          tipo: "deposito" , monto : 100
        },
        {
          tipo: "retiro" , monto : 50
        }
      ];
    //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(movimientos));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Pagina definitivamente desubicada.');
    }

    //incluye el enlace a la documentación de createServer :https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/bienvenida') {
        darBienvenida(req, res);
      } else if (url === '/api/usuarios') {
        getUsuarios(req, res);
      } else if (url === '/api/movimientos') {
        getMovimientos(req, res);
      } 
      else if (url === '/usuarios') {
        mostrarUsuarios(req, res);
      } 
      else if (url === '/movimientos') {
        mostrarMovimientos(req, res);
      } 
       //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      else if (url ==='/equipo'){
        mostrarEquipo(req, res);
      }
      
      
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?
      //no la pude ver, el codigo  si la detecta pero no la puede procesar ya que el servidor solo esta configurado para leer JSON y HTML

      //Agrega una ruta /opinion
      else if (url=== '/opinion'){
        mostrarOpinion(req, res);
      }
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html