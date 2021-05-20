module.exports.login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    loginData: true,
                    sellerId: 0,
                    permission: {
                        sale: true,
                        history: true,
                        member: true,
                        inventory: true,
                        discount: true,
                        report: true,
                        setting: true,
                    }
                }
            });
        }, 200);
    });
}

module.exports.getProductById = (productId) => {

    if (productId == '0')
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        productId: 0,
                        productName: 'น้ำยาอาบน้ำ',
                        productImageURL: 'https://lh3.googleusercontent.com/proxy/sKxJUaBzJeDDMdQ86UU8FeWioRAs2jjCcMGYdBJLIn3PMScg1j_Ps5SIv_mK4Hkin8_IyzRBllccBPvM91m-GoXb-VFxLAZV',
                        productPrice: 500.05,
                        productStock: 3
                    }
                });
            }, 200);
        });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    productId: 1,
                    productName: 'น้ำ',
                    productImageURL: 'https://lh3.googleusercontent.com/proxy/sKxJUaBzJeDDMdQ86UU8FeWioRAs2jjCcMGYdBJLIn3PMScg1j_Ps5SIv_mK4Hkin8_IyzRBllccBPvM91m-GoXb-VFxLAZV',
                    productPrice: 100.65,
                    productStock: 20
                }
            });
        }, 200);
    });
}

module.exports.getUserByUserPhoneNumber = (userPhoneNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    userName: 'สวัสดีชาวโลก',
                    userSurname: 'อิอิสวัสดี',
                    userPoint: 300.5
                }
            });
        }, 200);
    });
}

module.exports.getDiscountByDiscountCode = (discountCode) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    discountId: 0,
                    discountName: 'ส่วนลดน้ำยาซักผ้า',
                    discountType: 'money',
                    discountCode: 'AX5ji',
                    productId: 1,
                    discountPrice: 250,
                }
            });
        }, 200);
    });
}

module.exports.getAllAvailablePromotionDiscount = (discountCode) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        discountId: 0,
                        discountName: 'ส่วนลดเดือนพฤษภาคม',
                        discountType: 'promotion',
                        productId: 0,
                        discountPrice: 100,
                    },
                ]
            });
        }, 200);
    });
}

module.exports.getAllDiscount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        discountId: 0,
                        discountName: 'ส่วนลดเดือนพฤษภาคม',
                        discountType: 'promotion',
                        sellerName: 'ABC',
                        discountStatus: false,
                        discountDate: '123123123',
                        productId: 0,
                        discountPrice: 100,
                    },
                    {
                        discountId: 1,
                        discountName: 'ส่วนลดสบู่',
                        discountType: 'promotion',
                        sellerName: 'BCD',
                        discountStatus: false,
                        discountDate: '123123123',
                        productId: 1,
                        discountPrice: 200,
                    },
                    {
                        discountId: 2,
                        discountName: 'ส่วนสมาชิกลดสบู่',
                        discountType: 'member-promotion',
                        sellerName: 'ABC',
                        discountStatus: false,
                        discountDate: '123123123',
                        productId: 2,
                        discountPrice: 200,
                    },
                    {
                        discountId: 2,
                        discountName: 'ส่วนลดสบู่ลับ',
                        discountType: 'money',
                        discountCode: 'zk152lk',
                        sellerName: 'ABC',
                        discountStatus: false,
                        discountDate: '123123123',
                        productId: 2,
                        discountPrice: 500,
                    },
                ]
            });
        }, 200);
    });
}

module.exports.deleteDiscountById = (discountId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {}
            });
        }, 200);
    });
}

module.exports.getPointDiscountRate = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    pointDiscountRate: 0.1
                }
            });
        }, 200);
    });
}

module.exports.makePayment = (sellerId, cartList, discountList, userId, usePoint) => {

    console.log(cartList);
    console.log(discountList);
    console.log(userId);
    console.log(usePoint);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    paymentId: 'PM' + Math.random() * 100000 + '',
                    paymentTotalPrice: 1687.75,
                    paymentReceipt: 'http://localhost:5000/pdf/test.pdf'
                }
            });
        }, 200);
    });
}

module.exports.getPaymentByDate = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        paymentId: 0,
                        paymentTime: '11.00 น.',
                        paymentUserName: 'ทดสอบ',
                        paymentUserSurname: 'bcd',
                        paymentReceipt: 'http://localhost:5000/pdf/test.pdf',
                        sellerName: 'ABC',
                        sellerSurname: 'BCD',
                        paymentTotalPrice: 1687.75,
                    },
                    {
                        paymentId: 1,
                        paymentTime: '12.00 น.',
                        paymentUserName: 'ทดสอบ',
                        paymentUserSurname: 'bcd',
                        paymentReceipt: 'http://localhost:5000/pdf/test.pdf',
                        sellerName: 'ABC',
                        sellerSurname: 'BCD',
                        paymentTotalPrice: 1687.75,
                    },
                ]
            });
        }, 200);
    });
}

module.exports.getUserByDateAndQuery = (startDate, endDate, query) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        userId: 0,
                        userName: 'abc',
                        userSurname: 'bcd',
                        userPhoneNumber: '0123456',
                        userPoint: 300
                    },
                    {
                        userId: 1,
                        userName: 'aaa',
                        userSurname: 'bbb',
                        userPhoneNumber: '01234567',
                        userPoint: 200
                    },
                ]
            });
        }, 200);
    });
}

module.exports.deleteUserById = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {}
            });
        }, 200);
    });
}

module.exports.getProductByDateAndQuery = (startDate, endDate, query) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        productId: 0,
                        productBarCode: 'a6s78d6as8d',
                        productImage: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                        productName: 'ทดสอบสินค้า',
                        productPrice: 1832.75,
                        productStock: 20
                    },
                    {
                        productId: 1,
                        productBarCode: 'k23s8d91',
                        productImage: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                        productName: 'ทดสอบสินค้า 2',
                        productPrice: 12832.75,
                        productStock: 2
                    },
                ]
            });
        }, 200);
    });
}

module.exports.deleteProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {}
            });
        }, 200);
    });
}

module.exports.getReportByDate = (startDate) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    reportId: 0,
                    reportDate: '123123',
                    reportURL: 'https://nutpakorn.s3-ap-southeast-1.amazonaws.com/nutpakorn-tassanasorn-resume.pdf',
                    sellerName: 'ABC',
                },
            });
        }, 200);
    });
}

module.exports.createReport = (startDate) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {}
            });
        }, 200);
    });
}

module.exports.getSeller = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        sellerId: 0,
                        sellerName: 'ABC',
                        sellerSurname: 'bcd',
                        permission: {
                            sale: true,
                            history: true,
                            member: true,
                            inventory: true,
                            discount: true,
                            report: true,
                            setting: true,
                        },
                    },
                    {
                        sellerId: 1,
                        sellerName: 'AAA',
                        sellerSurname: 'BBB',
                        permission: {
                            sale: true,
                            setting: true,
                        },
                    }
                ]
            });
        }, 200);
    });
}

module.exports.deleteSeller = (sellerId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {}
            });
        }, 200);
    });
}

module.exports.changePassword = (newPassword) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {}
            });
        }, 200);
    });
}