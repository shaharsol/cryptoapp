import config from 'config';
import { Server } from 'socket.io';

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on('connection', socket => {
    console.log('a user connected')
    socket.on('update from worker', message => {
        console.log(`message received from allegedly the worker`, message)
        io.emit('update your list', message)
    })
});

io.listen(config.get<number>('io.port'));
console.log(`started io server `)