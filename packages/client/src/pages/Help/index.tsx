import React from "react";
import PagesImage from "../../img/help/pages.png";
import "./Help.scss";

const Help: React.FC = () => {
  return (
    <div className="help">
      <h3 className="text-center">Monopoly Banco Ayuda</h3>
      <p className="lead mt-2 text-center">Peque?a guia de uso.</p>

      <ul>
        <li>
          <a href="#pages">Paginas</a>
        </li>
        <li>
          <a href="#player-help">Ayuda Usuario</a>
        </li>
        <li>
          <a href="#banker-help">Ayuda Banquero</a>
        </li>
      </ul>

      <h4 id="pages">Paginas</h4>
      <img src={PagesImage} alt="Titles for each page" className="mw-100" />

      <h4 id="player-help">Ayuda Usuario</h4>

      <h5>Unirse a un Juego</h5>
      <p>
        Para unirse a un juego, seleccion "Unirse a Juego" en la pagina principal, e ingrese el ID del juego
        el usuario que sea el banquero (Quien inici? el juego), tiene este ID en su pantalla, y escriba su nombre. Luego precione Unirse.
      
      </p>

      <h5>Transferir fondos a otro jugador o al banco</h5>
      <p>
        Para transferir fondos, simplemente haga clic en el nombre del jugador, o banco. Luego ingrese el monto a transferir,
        y haga clic en Enviar. (Las letras M y K le ayudan si el monto a enviar es muy grande, ya que la M le suma millon y la K le suma 100.000)
      </p>

      <h5>Ver historial de transacciones</h5>
      <p>
        Todo tipo de transacci?n realizada puede verse en el men? "Historial"
      </p>

      <h4 id="banker-help">Ayuda Banquero</h4>

      <h5>Crear el Juego</h5>
      <p>
        Para crear un nuevo juego, haga clic en "Nuevo Juevo" y escriba su nombre.
        Al iniciar, ver?s un ID, este es el que debes pasarle a los demas jugadores para que se puedan unir.
      </p>

      <h5>Inicializando los balances de los jugadores</h5>
      <p>
        Una vez que inicias, en el men? Banco, veras el bot?n inicializar balances. Esto esta disponible solo
        cuando a?n no hubo ning?na transacci?n. Luego que todos los jugadores se unieron, haz clic en el bot?n, ingresa el 
        monto inicial que deseas entregar a cada usuario e Inicializar. Luego si se une otro jugador puedes hacerlo enviando
        dinero a cada usuarios que desees uno a uno desde la opcion banco.
      </p>
      
      <h5>Enviarle dinero a los usuarios desde el Banco</h5>
      <p>
        En la pagina de banco donde indica "Enviar dinero a jugador" permite enviar dinero a los usuarios
        Solo ingresa el monto, selecciona el jugador que debe recibirlo y clic en Enviar
        
      </p>

      <h5>Cobrar dinero de usuario a banco</h5>
      <p>
        Los jugadores pueden hacer los pagos desde su propia cuenta y pagina de Fondos, sin embargo, si necesitas
        cobrarle directo desde el banco puedes hacerlo en la opcion "Tomar dinero de jugador" indicando el monto y el nombre del jugador y clic en el boton Tomar
      </p>
      
      <h5>Jugador pasa por inicio</h5>
      <p>
        Cada vez que un jugador pasa por el inicio, puedes seleccionar el nombre del jugador y Enviar para acreditarle el diner de recompenza.
      </p>
      <p>
        El monto de la recompenza puedes configurarlo haciendo clic en la herramienta a la izquierda del jugador.
      </p>

      <h5>Cambiar nombre de jugador</h5>
      <p>
        Puedes cambiar el nombre de los jugadores en la pagina Conf. haciendo clic en el boton de lapiz, escribiendo el nuevo nombre y Guardar
      </p>

      <h5>Eliminar un jugador</h5>
      <p>
       Puedes eliminar un jugador haciendo clic en Conf. a la derecha del nombre de jugador en el icono de papelera
      </p>

      <h5>Cerrar juego para nuevos jugadores</h5>
      <p>
        En el men? "Conf." puedes hacer clic en "Cerrar Juego para nuevos jugadores", esto asegura que ning?n otro participante pueda unirse
        a tu juego. Si luego decides volverlo a abrir para sumar a alguien mas, puedes volver a hacer clic en "Abrir Juego para nuevos jugadores"
      </p>
  
      <h5>Finalizar juego</h5>
      <p>
        Puedes finalizar el juego en el bot?n "Finalizar Juego" en la pantalla "Conf."
      </p>
    </div>
  );
};

export default Help;
