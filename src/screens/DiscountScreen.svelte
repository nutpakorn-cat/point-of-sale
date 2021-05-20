{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).discount}
<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ส่วนลด
            </div>
            <div class="card-body">
                <div class="text-center" style="margin-bottom: 50px;margin-top: 30px;">
                    <button on:click={() => { isShowAddDiscount = true }} class="btn btn-success">+ เพิ่มส่วนลด</button>
                    <Modal
                        modalTitle="เพิ่มส่วนลด"
                        modalComponent="AddDiscount"
                        isShow={isShowAddDiscount}
                        close={() => { isShowAddDiscount = false }}
                    />
                </div>
                <div class="container">
                    {#if discountList}
                        <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                            <thead>
                                <th>#</th>
                                <th>ชื่อส่วนลด</th>
                                <th>รหัส</th>
                                <th>ออกโดย</th>
                                <th>สถานะ</th>
                                <th>จัดการ</th>
                            </thead>
                            <tbody>
                                {#each discountList as discount, i}
                                    <Modal
                                            modalTitle={'แก้ไขส่วนลด ' + discount.discountName}
                                            modalComponent="EditDiscount"
                                            isShow={isShowEditDiscount[i]}
                                            close={() => { isShowEditDiscount[i] = false }}
                                        />
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{discount.discountName}</td>
                                        <td>{(discount.discountType == 'money') ? discount.discountCode : 'ไม่มี'}</td>
                                        <td>{discount.sellerName}</td>
                                        <td>{(discount.discountStatus) ? 'ไม่สามารถใช้ได้แล้ว' : 'สามารถใช้ได้'}</td>
                                        <td><button on:click={() => { isShowEditDiscount[i] = true }} class="btn btn-warning" style="color: white;">แก้ไข</button> <button on:click={() => {deleteDiscount(i)}} class="btn btn-danger">ลบ</button></td>
                                    </tr>
                                {/each}
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

    import dataService from './../dataService';

    import Modal from './../components/Modal.svelte';

    let discountList = [];

    let isShowAddDiscount = false;
    let isShowEditDiscount = [];

    onMount(() => {
        fetchData();
    });

    const fetchData = async () => {
        const result = await dataService.getAllDiscount();

        if (('error') in result.data)
            return;

        discountList = result.data;
    }

    const deleteDiscount = async (i) => {
        const result = await dataService.deleteDiscountById(discountList[i].discountId);

        if ('error' in result.data)
            return;

        discountList.splice(i, 1);
        discountList = discountList;
    }

</script>