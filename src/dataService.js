const axios = require('axios');
const hostName = require('./hostname');

// POST /authentication
module.exports.login = (username, password) => {
    return axios.post(hostName + '/authentication', {
        username,
        password
    });
}

// GET /product/by-id
module.exports.getProductById = (productId) => {
    return axios.get(hostName + '/product/by-id', {
        params: {
            productId
        }
    });
}

// GET /user/by-phone-number
module.exports.getUserByUserPhoneNumber = (userPhoneNumber) => {
    return axios.get(hostName + '/user/by-phone-number', {
        params: {
            userPhoneNumber
        }
    });
}

// GET discount/by-code
module.exports.getDiscountByDiscountCode = (discountCode) => {
    return axios.get(hostName + '/discount/by-code', {
        params: {
            discountCode
        }
    });
}

// GET discount/promotion
module.exports.getAllAvailablePromotionDiscount = () => {
    return axios.get(hostName + '/discount/promotion');
}

// GET /discount
module.exports.getAllDiscount = () => {
    return axios.get(hostName + '/discount');
}

// DELETE /discount/by-id
module.exports.deleteDiscountById = (discountId) => {
    return axios.delete(hostName + '/discount/by-id', {
        data: {
            discountId
        }
    });
}

// GET /system
module.exports.getPointDiscountRate = () => {
    return axios.get(hostName + '/system');
}

// POST /payment
module.exports.makePayment = (sellerId, cartList, discountList, userId, usePoint) => {

    cartList = (cartList == null) ? null : cartList;
    discountList = (discountList == null) ? null : discountList;
    userId = (userId == null) ? null : userId;
    usePoint = (usePoint == null) ? null : usePoint;

    return axios.post(hostName + '/payment', {
        sellerId,
        cartList,
        discountList,
        userId,
        usePoint
    });
    
}

// GET /payment/by-date
module.exports.getPaymentByDate = (startDate, endDate) => {
    return axios.get(hostName + '/payment/by-date', {
        params: {
            startDate,
            endDate
        }
    });
}

// GET /user/by-query
module.exports.getUserByQuery = (query) => {
    return axios.get(hostName + '/user/by-query', {
        params: {
            query
        }
    });
}

// DELETE /user/by-id
module.exports.deleteUserById = (userId) => {
    return axios.delete(hostName + '/user/by-id', {
        data: {
            userId
        }
    });
}

// GET /product/by-date-and-query
module.exports.getProductByDateAndQuery = (startDate, endDate, query) => {
    return axios.get(hostName + '/product/by-date-and-query', {
        params: {
            startDate,
            endDate,
            query
        }
    });
}

// DELETE /product/by-id
module.exports.deleteProductById = (productId) => {
    return axios.delete(hostName + '/product/by-id', {
        data: {
            productId
        }
    });
}

// GET /report/by-date
module.exports.getReportByDate = (startDate) => {
    return axios.get(hostName + '/report/by-date', {
        params: {
            startDate,
        }
    });
}

// POST /report *** sellerId
module.exports.createReport = (sellerId, startDate) => {
    console.log(sellerId);
    console.log(startDate);
    return axios.post(hostName + '/report', {
        sellerId,
        startDate
    });
}

// GET /seller
module.exports.getSeller = () => {
    return axios.get(hostName + '/seller');
}

// DELETE /seller/by-id
module.exports.deleteSeller = (sellerId) => {
    return axios.delete(hostName + '/seller/by-id', {
        data: {
            sellerId
        }
    });
}

// PATCH /seller/password
module.exports.changePassword = (sellerId, oldPassword, newPassword) => {
    return axios.patch(hostName + '/seller/password', {
        sellerId,
        oldPassword,
        newPassword
    });
}

module.exports.updateStore = (storeName, pointDiscountRate) => {
    return axios.patch(hostName + '/system', {
        storeName,
        pointDiscountRate
    });
}

module.exports.getUserById = (userId) => {
    return axios.get(hostName + '/user/by-id', {
        params: {
            userId
        }
    });
}

module.exports.addMember = (userName, userSurname, userPhoneNumber) => {
    return axios.post(hostName + '/user', {
        userName,
        userSurname,
        userPhoneNumber
    });
}

module.exports.updateMember = (userId, userName, userSurname, userPhoneNumber) => {
    return axios.put(hostName + '/user', {
        userId,
        userName,
        userSurname,
        userPhoneNumber
    });
}

module.exports.addProduct = (productName, sellerId, productImageURL, productPrice, productStock, productCost, productPoint) => {
    return axios.post(hostName + '/product', {
        productName,
        sellerId,
        productImageURL,
        productPrice,
        productStock,
        productCost,
        productPoint
    });
}

module.exports.updateProduct = (productId, productName, productImageURL, productPrice, productStock, productCost, productPoint) => {
    return axios.put(hostName + '/product', {
        productId,
        productName,
        productImageURL,
        productPrice,
        productStock,
        productCost,
        productPoint
    });
}

module.exports.getAllProduct = () => {
    return axios.get(hostName + '/product');
}

module.exports.addDiscount = (discountName, discountType, sellerId, productId, discountPrice, discountCode) => {
    return axios.post(hostName + '/discount', {
        discountName,
        discountType,
        sellerId,
        productId,
        discountPrice,
        discountCode
    });
}

module.exports.addSeller = (sellerUserName, sellerPassword, sellerName, sellerSurname, sellerPhoneNumber, permission) => {
    return axios.post(hostName + '/seller', {
        sellerUserName,
        sellerPassword,
        sellerName,
        sellerSurname,
        sellerPhoneNumber,
        permission
    });
}

module.exports.updateSeller = (sellerId, sellerUserName, sellerPassword, sellerName, sellerSurname, sellerPhoneNumber, permission) => {
    return axios.put(hostName + '/seller', {
        sellerId,
        sellerUserName,
        sellerPassword,
        sellerName,
        sellerSurname,
        sellerPhoneNumber,
        permission
    });
}

module.exports.getSellerById = (sellerId) => {
    return axios.get(hostName + '/seller/by-id', {
        params: {
            sellerId
        }
    });
}
