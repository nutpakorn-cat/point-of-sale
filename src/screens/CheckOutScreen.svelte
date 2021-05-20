<div>
    {#if cartList != null}
        <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
            <div class="card">
                <div class="card-header">
                    รายการสั่งซื้อ
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <p>รายการสั่งซื้อ</p>
                        <br>
                        {#each cartList as product}
                            <p>{product.productName} x{product.quantity} รวม {(product.quantity * product.productPrice).toFixed(2)} บาท</p>
                        {/each}
                        <p>ยอดรวม: {sumPrice}</p>
                        <br>

                        {#if userData.userName != null}
                            <p>สมาชิก คุณ {userData.userName} {userData.userSurname}</p>
                            <p>จำนวนแต้ม: {userData.userPoint}</p>
                            <br>
                        {/if}

                        {#if realDiscountList.length}
                            <p>ส่วนลด</p>
                            {#each realDiscountList as discount, i}
                                <p>{discount.title} x{discount.quantity} -{discount.totalDiscount.toFixed(2)} บาท</p>
                            {/each}
                            ส่วนลดทั้งหมด {totalDiscount.toFixed(2)} บาท
                            <br>
                            <br>
                        {/if}
                        ยอดที่ต้องชำระรวม {((sumPrice - totalDiscount) < 0 ? 0 : (sumPrice - totalDiscount)).toFixed(2)} บาท
                        <br>
                        <br>
                        <button on:click={back} class="btn btn-warning" style="color: white;">&lt;- กลับไปแก้ไข</button>
                        <button on:click={payment} class="btn btn-success" style="color: white;">ชำระเงิน -&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<script>
    import { onMount } from 'svelte';
    import { navigate, Link } from "svelte-navigator";

    import dataService from './../dataService';

    const cartList = JSON.parse(localStorage.getItem('cartList'));
    const userData = JSON.parse(localStorage.getItem('userData'));
    const discountList = JSON.parse(localStorage.getItem('discountList'));
    const usePoint = JSON.parse(localStorage.getItem('usePoint'));

    let realDiscountList = [];

    let sumPrice = 0;
    let totalDiscount = 0;
    
    onMount(async () => {

        if (!cartList) {
            navigate('/', {replace: true});
        }

        cartList.forEach((each) => {
            sumPrice += each.productPrice * each.quantity;
        });

        if (usePoint) {
            const pointDiscountRate = await dataService.getPointDiscountRate();

            if (('error') in pointDiscountRate)
                return;

            realDiscountList.push({
                title: 'ใช้แต้มสมาชิก จำนวน ' + userData.userPoint + ' แต้ม',
                quantity: 1,
                totalDiscount: pointDiscountRate.data.pointDiscountRate * userData.userPoint
            });

            totalDiscount += pointDiscountRate.data.pointDiscountRate * userData.userPoint;
        }

        discountList.forEach((eachDiscount) => {
            if (eachDiscount.discountType == 'promotion' || ((eachDiscount.discountType == 'member-promotion') && (userData != null))) {
                
                let countAssociatedProduct = 0;

                cartList.forEach((each) => {
                    if (each.productId == eachDiscount.productId) {
                        countAssociatedProduct += each.quantity;     
                    }
                });

                if (countAssociatedProduct) {

                    realDiscountList.push({
                        title: eachDiscount.discountName,
                        quantity: countAssociatedProduct,
                        totalDiscount: countAssociatedProduct * eachDiscount.discountPrice
                    });
                    
                    totalDiscount += countAssociatedProduct * eachDiscount.discountPrice;
                }
            } else if (eachDiscount.discountType == 'money') {
                realDiscountList.push({
                    title: eachDiscount.discountName,
                    quantity: 1,
                    totalDiscount: eachDiscount.discountPrice
                });

                totalDiscount += eachDiscount.discountPrice;
            }

            realDiscountList = realDiscountList;
        });
    });

    const back = () => {
        localStorage.setItem('isBack', true);
        navigate('/manage', {replace: true});
    }
    
    const payment = async () => {

        const paymentResult = await dataService.makePayment(localStorage.getItem('sellerId'), cartList, discountList, userData.userId, usePoint);

        if (('error') in paymentResult)
            return;
        
        localStorage.removeItem('paymentData');
        localStorage.setItem('paymentData', JSON.stringify(paymentResult.data));

        localStorage.removeItem('cartList');
        localStorage.removeItem('userData');
        localStorage.removeItem('discountList');
        localStorage.removeItem('usePoint');
        localStorage.removeItem('isBack');

        navigate('/success');
    }


</script>