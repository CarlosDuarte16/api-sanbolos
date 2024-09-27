import APISanBolos from './controller/APISanBolosController.js';

export default function adicionarRotas(server){
    server.use('/api', APISanBolos)
}
