import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export const initiateWebsocketConnection = (): WebSocketSubject<any> => {
    const subject = webSocket('ws://localhost:8425/');
    return subject
}