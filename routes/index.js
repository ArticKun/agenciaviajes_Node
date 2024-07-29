

// Importamos express
import express from 'express';
// Importamos controlador
import { 
  paginaInicio, paginaNosotros, 
  paginaViajes, paginaTestimonios, 
  paginaDetalleViaje
} from '../controllers/paginasControllers.js';
// Importamos controlador de testimonio(Envio de formulario)
import {guardarTestimonio} from '../controllers/testimonioController.js';


// Instanciamos express
const router = express.Router();


// Routing de las vistas / paginas
router.get('/', paginaInicio );                    // pagina de inicio
router.get('/nosotros', paginaNosotros );          // pagina de nosotros
router.get('/viajes', paginaViajes );              // pagina de viajes
router.get('/viajes/:slug', paginaDetalleViaje );  // pagina mas informacion
router.get('/testimonios', paginaTestimonios );    // pagina de testimonios
router.post('/testimonios',guardarTestimonio);      // envio de formulario


// Exportamos el modulo
export default router;