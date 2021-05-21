<div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ชื่อสินค้า</div>
        <div class="col-md-8"><input bind:value={productName} type="text" class="form-control" placeholder="ชื่อสินค้า"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">รูป</div>
        <div class="col-md-8"><input bind:value={productImageURL} type="text" class="form-control" placeholder="รูปภาพ"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ราคา (บาท)</div>
        <div class="col-md-8"><input bind:value={productPrice} type="text" class="form-control" placeholder="ราคา"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">จำนวนสินค้าในคลัง</div>
        <div class="col-md-8"><input bind:value={productStock} type="text" class="form-control" placeholder="จำนวนสินค้าในคลัง"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ต้นทุน (บาท/ต่อชิ้น)</div>
        <div class="col-md-8"><input bind:value={productCost} type="text" class="form-control" placeholder="ต้นทุน (บาท/ชิ้น)"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">จำนวนแต้มที่ได้</div>
        <div class="col-md-8"><input bind:value={productPoint} type="text" class="form-control" placeholder="จำนวนแต้มที่ได้"></div>
    </div>
    <button on:click={addProduct} class="btn btn-success" disabled={productName == '' || productImageURL == '' || productPrice == '' || productStock == '' || productPoint == ''}>+ เพิ่ม</button>
</div>

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

    let productName = '';
    let productImageURL = '';
    let productPrice = '';
    let productStock = '';
    let productPoint = '';
    let productCost = '';

    const addProduct = async () => {
        await dataService.addProduct(productName, localStorage.getItem('sellerId'), productImageURL, productPrice, productStock, productCost, productPoint);
        alert('เพิ่มข้อมูลสำเร็จ');
        location.reload();
    }
</script>