<div>
    <Modal modalTitle="Receipt" modalBody={'<object data="' + paymentData.paymentReceipt + '" type="application/pdf" width="100%" height="500px"></object>'} isShow={isShow} close={() => {isShow = false;}}/>
    {#if paymentData}
        <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
            <div class="card">
                <div class="card-header">
                    ทำรายการสำเร็จ
                </div>
                <div class="card-body text-center">
                    <br>
                    <h2>การขายสำเร็จ</h2>
                    <h2>ยอดรวม: {paymentData.paymentTotalPrice}</h2>
                    <br>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <p>1000</p>
                                    <h3>{count[0]} ใบ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <p>500</p>
                                    <h3>{count[1]} ใบ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <p>100</p>
                                    <h3>{count[2]} ใบ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <p>50</p>
                                    <h3>{count[3]} ใบ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <p>20</p>
                                    <h3>{count[4]} ใบ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card">
                                <div class="card-body">
                                    <p>10</p>
                                    <h3>{count[5]} เหรียญ</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <p>5</p>
                                    <h3>{count[6]} เหรียญ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <p>1</p>
                                    <h3>{count[7]} เหรียญ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <p>0.5</p>
                                    <h3>{count[8]} เหรียญ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <p>0.25</p>
                                    <h3>{count[9]} เหรียญ</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <button on:click={() => {isShow = true;}} class="btn btn-primary">พิมพ์ใบเสร็จ</button>
                    <button on:click={() => {
                        localStorage.removeItem('cartList');
                        localStorage.removeItem('userData');
                        localStorage.removeItem('discountList');
                        localStorage.removeItem('usePoint');
                        localStorage.removeItem('isBack');
                        localStorage.removeItem('paymentData');
                        navigate('/', {replace: true});
                    }} class="btn btn-success">เสร็จสิ้น</button>
                </div>
            </div>
        </div>
    {/if}
</div>

<script>
    import { onMount } from 'svelte';
    import { navigate, Link } from "svelte-navigator";

    import Modal from './../components/Modal.svelte';

    import dataService from './../dataService';

    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const moneyType = [1000, 500, 100, 50, 20, 10, 5, 1, 0.5, 0.25];

    let count = [];
    let isShow = true;

    onMount(() => {

        if (!localStorage.getItem('loginData'))
            navigate('/', {replace: true});

        if (!paymentData) {
            navigate('/', {replace: true});
        }

        calculateCount();
    });

    const calculateCount = () => {
        
        let price = paymentData.paymentTotalPrice;

        for (let i = 0 ; i < moneyType.length ; ++i) {
            count[i] = Math.floor(price / moneyType[i]);
            price -= count[i] * moneyType[i];
        }
        
    }
</script>