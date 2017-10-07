module.exports = app => {    
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Go to the Bank"},
                {title: "Fix Computer"},
            ]);
        }
    }
}