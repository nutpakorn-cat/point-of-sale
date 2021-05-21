<div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ชื่อส่วนลด</div>
        <div class="col-md-8"><input bind:value={discountName} type="text" class="form-control" placeholder="ชื่อส่วนลด"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ประเภทส่วนลด</div>
        <div class="col-md-8">
            <select bind:value={discountType} class="form-control">
                <option value="promotion">โปรโมชันสำหรับทุกคน</option>
                <option value="member-promotion">โปรโมชันสำหรับสมาชิก</option>
                <option value="money">รหัสลับส่วนลด</option>
            </select>
        </div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ลดราคาสินค้า</div>
        <div class="col-md-8">
            <select bind:value={productIndex} class="form-control">
                {#each productList as product, i}
                    <option value={i}>{product.productName}</option>
                {/each}
            </select>
        </div>
    </div>
    {#if productList.length}
        <img class="text-center" src={productList[productIndex].productImageURL}  width="200" />
        <br>
        <br>
    {/if}
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">จำนวนราคาที่หักลด (บาท)</div>
        <div class="col-md-8"><input bind:value={discountPrice} type="text" class="form-control" placeholder="จำนวนราคาที่หักลด (บาท)"></div>
    </div>
    {#if discountType == 'money'}
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-md-4" style="padding-top: 8px;">รหัสลับส่วนลด</div>
            <div class="col-md-8"><input bind:value={discountCode} type="text" class="form-control" placeholder="รหัสลับส่วนลด"></div>
        </div>
    {/if}
    <button on:click={addDiscount} class="btn btn-success" disabled={discountName == '' || discountType == '' || discountPrice == ''}>+ เพิ่ม</button>
</div>

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

    let discountName = '';
    let discountType = 'promotion';
    let productIndex = 0;
    let discountPrice = '';
    let discountCode = '';

    let productList = [];

    onMount(async () => {
        const result = await dataService.getAllProduct();
        productList = result.data;
    });

    const addDiscount = async () => {
        await dataService.addDiscount(discountName, discountType, localStorage.getItem('sellerId'), productList[productIndex].productId, discountPrice, discountCode);
        alert('เพิ่มข้อมูลสำเร็จ');
        location.reload();
    }
</script>