{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).history}
<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ประวัติการขาย
            </div>
            <div class="card-body">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4" style="padding-top: 8px;">เริ่มต้นวันที่</div>
                                <div class="col-md-8"><input on:change={fetchData} bind:value={startDate} type="date" class="form-control"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4" style="padding-top: 8px;">สิ้นสุดวันที่</div>
                                <div class="col-md-8"><input on:change={fetchData} bind:value={endDate} type="date" class="form-control"></div>
                            </div>
                        </div>
                    </div>
                    {#if paymentList}
                        <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                            <thead>
                                <th>#</th>
                                <th>เวลา</th>
                                <th>ลูกค้า</th>
                                <th>แคชเชียร์</th>
                                <th>ใบเสร็จ</th>
                                <th>ยอดรวม (บาท)</th>
                            </thead>
                            <tbody>
                                {#each paymentList as payment, i}
                                    <Modal 
                                        modalTitle={'Receipt #' + payment.paymentId} 
                                        modalBody={'<object data="' + payment.paymentReceipt + '" type="application/pdf" width="100%" height="500px"></object>'}
                                        isShow={isShow[i]}
                                        close={() => { isShow[i] = false; }}
                                    />
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{payment.paymentTime}</td>
                                        <td>{payment.paymentUserName} {payment.paymentUserSurname}</td>
                                        <td>{payment.sellerName} {payment.sellerSurname}</td>
                                        <td><button on:click={() => { isShow[i] = true; }} class="btn btn-primary">ดู</button></td>
                                        <td>{payment.paymentTotalPrice.toFixed(2)}</td>
                                    </tr>
                                {/each}
                                <tr>
                                    <td colspan="5">ยอดรวม</td>
                                    <td>{sum.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
{/if}

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";
    import Modal from '../components/Modal.svelte';

    import dataService from './../dataService';

    let paymentList = [];
    let isShow = [];

    let sum = 0;

    let startDate = '';
    let endDate = '';

    onMount(() => {
        fetchData();
    });

    const fetchData = async () => {
        const result = await dataService.getPaymentByDate(startDate, endDate);

        if (('error') in result.data)
            return;

        paymentList = result.data;

        paymentList.forEach((each) => {
            sum += each.paymentTotalPrice;
        });
    }

</script>