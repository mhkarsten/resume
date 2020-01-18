export const actionLoggerMW = (store: any) => (next: (arg0: any) => void) => (action: any) => {
    console.log('Dispatching Action:', action);
    return next(action);
}