{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).sale}
    {#if focusInput}
        <div class="product-list">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
                <div class="col-md-4 text-right"><button on:click={() => { focusInput = false; }} type="button" class="btn-close ms-auto" data-bs-dismiss="alert" 
                    style="margin-left: auto!important;
                    display: block;"
                aria-label="Close"></button></div>
            </div>
            {#if productList.length}
                
                {#each productList as product}
                    <div class="row text-center">
                        <div class="col-md-6">
                            <div class="image" style={'background-image: url(' + product.productImageURL + ')'}></div>
                        </div>
                        <div class="col-md-6" style="padding-top: 10px;">
                            <h5 style="margin-bottom: 10px;">{product.productName}</h5>
                            <h6 style="margin-bottom: 10px;">{product.productPrice.toFixed(2)} บาท</h6>
                            <button class="btn btn-primary" on:click={() => { productId = product.productId; addItem(); }}>+ ใส่ในตะกร้า</button>
                        </div>
                    </div>
                    <br><br>
                {/each}
                
            {/if}
        </div>
    {/if}
    <div>
        <div class="product-input">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-2" style="padding-top: 8px;">
                        รหัสสินค้า
                    </div>
                    <div class="col-md-8">
                        <input on:focus={() => { focusInput = true; }} bind:value={productId} type="text" class="form-control responsive-size" placeholder="รหัสสินค้า">
                    </div>
                    <div class="col-md-2">
                        <button on:click={addItem} class="btn btn-success responsive-size" disabled={isAdding || productId == ''}>+ เพิ่ม</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container responsive-margin" style="margin-top: 50px;margin-bottom: 100px;">
            <div class="card">
                <div class="card-header">
                    ขายของ
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row">
                                {#if !cartList.length}
                                    <h3 style="color: grey;margin-top: 20px;" class="text-center">ตะกร้าสินค้าว่าง</h3>
                                {/if}
                                {#each cartList as product, i}
                                    <div class="col-md-12">
                                        <div class="card" style="margin-bottom: 30px;">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <div class="image" style={'background-image: url(' + product.productImageURL + ')'}></div>
                                                    </div>
                                                    <div class="col-md-5" style="padding-left: 20px;padding-top: 35px;">
                                                        <p>{product.productName}</p>
                                                        <p>ราคา: {product.productPrice} บาท</p>
                                                    </div>
                                                    <div class="col-md-2 text-center" style="padding-top: 35px;">
                                                        <input on:change={() => { 
                                                            if (cartList[i].quantity > product.productStock) 
                                                                cartList[i].quantity = product.productStock 
                                                            if (cartList[i].quantity <= 0) 
                                                                cartList[i].quantity = 1

                                                            calculateSum();
                                                        }} max={product.productStock} min="1" bind:value={cartList[i].quantity} type="number" class="form-control" placeholder="จำนวน">
                                                    </div>
                                                    <div class="col-md-2 text-center" style="padding-top: 35px;">
                                                        <button on:click={() => { deleteItem(i) }} class="btn btn-danger" style="color: white; width: 50%">ลบ</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="text-center" style="margin-top: 20px;color: green;">ราคารวม: {sum.toFixed(2)} บาท</h3>
                                    <h4 style="margin-top: 50px;">ระบบสมาชิก</h4>
                                    <hr>
                                    {#if !(('userName') in userData)}
                                        <div class="row text-center">
                                            <div class="col-md-4">
                                                <p style="margin-top: 7px;">สมาชิก</p>
                                            </div>
                                            <div class="col-md-6">
                                                <input bind:value={userPhoneNumber} type="text" class="form-control" placeholder="เบอร์โทรศัพท์สมาชิก">
                                            </div>
                                            <div class="col-md-2">
                                                <button on:click={checkUser} class="btn btn-success">ใช้</button>
                                            </div>
                                        </div>
                                    {:else}
                                        <div class="text-center">
                                            <br>
                                            <p>คุณ: {userData.userName} {userData.userSurname}</p>
                                            <p>แต้ม: {userData.userPoint}</p>
                                            {#if usePoint}
                                                <p class="text-danger"><b>คุณเลือกที่จะ: ใช้แต้ม</b></p>
                                            {:else}
                                                <p>คุณเลือกที่จะ: ไม่ใช้แต้ม</p>
                                            {/if}
                                            <br>
                                            <button on:click={clearUserData} class="btn btn-warning" style="color: white;">เปลี่ยน</button> 
                                            {#if usePoint}
                                                <button on:click={() => { usePoint = false }} class="btn btn-danger">ยกเลิกการใช้แต้ม</button>
                                            {:else}
                                                <button on:click={() => { usePoint = true }} class="btn btn-primary">ใช้แต้ม</button>
                                            {/if}
                                            
                                        </div>
                                    {/if}
                                    <h4 style="margin-top: 30px;">รหัสส่วนลด</h4>
                                    <hr>
                                    <div class="row text-center">
                                        <div class="col-md-4">
                                            <p style="margin-top: 7px;">รหัสส่วนลด</p>
                                        </div>
                                        <div class="col-md-6">
                                            <input bind:value={discountCode} type="text" class="form-control" placeholder="รหัสส่วนลด">
                                        </div>
                                        <div class="col-md-2">
                                            <button on:click={addDiscount} class="btn btn-success">เพิ่ม</button>
                                        </div>
                                    </div>

                                    <div class="text-center" style="margin-top: 10px;">
                                        {#each discountList as discount, i}
                                            {#if discount.discountType == 'money'}
                                                <p style="margin-bottom: 5px;">{discount.discountCode}
                                                <button  on:click={() => { discountList.splice(i, 1); discountList = discountList; }} class="btn btn-sm btn-danger">X</button></p>
                                            {/if}
                                        {/each}
                                    </div>
                                    
                                    {#if !cartList.length}
                                        <button class="btn btn-success" style="margin-top: 20px;width: 100%" disabled>ถัดไป</button>
                                    {:else}
                                        <button on:click={next} class="btn btn-success" style="margin-top: 20px;width: 100%">ถัดไป</button>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{:else}
    <h3 class="text-center" style="margin-top: 50px;">บัญชีของคุณไม่มีสิทธิ์ใช้งานในส่วนนี้</h3>
{/if}

<script>
    import { onMount } from 'svelte';
    import { Link, navigate } from "svelte-navigator";

    import dataService from './../dataService';

    let productList = [];

    let cartList = [];
    let userData = {};
    let discountList = [];

    let usePoint = false;

    let sum = 0;

    let productId = '';
    let userPhoneNumber = '';
    let discountCode = '';

    let isAdding = false;

    let focusInput = false;

    onMount(async () => {

        if (!localStorage.getItem('loginData'))
            navigate('/', {replace: true});

        cartList = (localStorage.getItem('isBack')) ?
            JSON.parse(localStorage.getItem('cartList')) : [];

        userData = (localStorage.getItem('isBack')) ?
            JSON.parse(localStorage.getItem('userData')) : {};

        discountList = (localStorage.getItem('isBack')) ?
            JSON.parse(localStorage.getItem('discountList')) : [];

        usePoint = (localStorage.getItem('isBack')) ?
            JSON.parse(localStorage.getItem('usePoint')) : false;

        if (localStorage.getItem('isBack')) {
            calculateSum();
        }

        localStorage.removeItem('isBack');

        const productResult = await dataService.getAllProduct();
        productList = productResult.data;
    });

    const calculateSum = () => {
        sum = 0;
        cartList.forEach((eachProduct) => {
            sum += eachProduct.productPrice * eachProduct.quantity;
        });
    }

    const addItem = async () => {
        
        isAdding = true;
        const result = await dataService.getProductById(productId);
        console.log(result);
        isAdding = false;

        if (('error') in result.data)
            return;

        for (let i = 0 ; i < cartList.length ; ++i) {
            if (cartList[i].productId == productId) {

                if (cartList[i].quantity < cartList[i].productStock)
                    cartList[i].quantity += 1;

                calculateSum();
                    
                return;
            }
        }

        cartList.push({
            ...result.data,
            quantity: 1
        });
        cartList = cartList;
        calculateSum();
    }

    const deleteItem = (i) => {
        cartList.splice(i, 1);
        cartList = cartList;
        calculateSum();
    }

    const checkUser = async () => {

        const result = await dataService.getUserByUserPhoneNumber(userPhoneNumber);

        if (('error') in result.data)
            return;

        userData = result.data;
    }

    const clearUserData = () => {
        userData = {};
    }

    const addDiscount = async () => {

        const result = await dataService.getDiscountByDiscountCode(discountCode);

        if (('error') in result.data)
            return;

        for (let i = 0 ; i < discountList.length ; ++i) {
            if (discountList[i].discountId == discountId) {
                return;
            }
        }

        discountList.push(result.data);
        discountList = discountList
    }

    const next = async () => {
        localStorage.removeItem('cartList');
        localStorage.removeItem('userData');
        localStorage.removeItem('discountList');
        localStorage.removeItem('usePoint');
        localStorage.removeItem('isBack');

        const allOfAvailablePromotionDiscount = await dataService.getAllAvailablePromotionDiscount();

        if (allOfAvailablePromotionDiscount.data.length) {

            let alreadyAddPromotion = false;

            for (let i = 0 ; i < discountList.length ; ++i) {
                if (discountList[i].discountType == 'promotion' || discountList[i].discountType == 'member-promotion') {
                    alreadyAddPromotion = true;
                    break;
                }
            }

            if (!alreadyAddPromotion) {
                discountList = [
                    ...discountList,
                    ...allOfAvailablePromotionDiscount.data
                ];
            }
        }

        localStorage.setItem('cartList', JSON.stringify(cartList));
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('discountList', JSON.stringify(discountList));
        localStorage.setItem('usePoint', usePoint);

        navigate('/checkout');
    }

</script>