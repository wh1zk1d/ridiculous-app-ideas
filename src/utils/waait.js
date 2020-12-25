const waait = (sec = 1) => new Promise(resolve => setTimeout(resolve, sec * 1000))

export default waait
