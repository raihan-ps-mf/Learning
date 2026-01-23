
const promise = Promise.resolve('Resolved Promise')
const reject = Promise.reject(new Error('Rejected Promise'))

reject.catch((error) => {
    console.error('Error occurred');
    console.log(error.message);
})