export default function(msg) {
    if (process.env.NODE_ENV === 'development') console.log(msg)
}
