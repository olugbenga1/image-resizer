const welcome = (name: string) => {
    let message = `Hello world mr ${name}`
    return message;
}
console.log(welcome('Olu'))

export default {
    welcome
}