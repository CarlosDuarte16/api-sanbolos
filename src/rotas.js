import express from 'express'

import APISanBolos from './controller/APISanBolosController.js';

export default function adicionarRotas(server){
    server.use('/api', APISanBolos)
    server.use('/storage', express.static('./storage'))
}
