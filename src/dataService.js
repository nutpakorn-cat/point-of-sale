module.exports.testAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        id: '1',
                        title: 'nutnoi'
                    },
                    {
                        id: '2',
                        title: 'bewnoinim'
                    }
                ]
            });
        }, 200);
    });
}

module.exports.login = (username, password) => {
    if (username == 'admin' && password == 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        status: true
                    }
                });
            }, 200);
        });
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    status: false
                }
            });
        }, 200);
    });
}