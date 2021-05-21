<div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ชื่อจริง</div>
        <div class="col-md-8"><input bind:value={sellerName} type="text" class="form-control" placeholder="ชื่อจริง"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">นามสกุล</div>
        <div class="col-md-8"><input bind:value={sellerSurname} type="text" class="form-control" placeholder="นามสกุล"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">เบอร์โทรศัพท์</div>
        <div class="col-md-8"><input bind:value={sellerPhoneNumber} type="text" class="form-control" placeholder="เบอร์โทรศัพท์"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ชื่อผู้ใช้</div>
        <div class="col-md-8"><input bind:value={sellerUserName} type="text" class="form-control" placeholder="ชื่อผู้ใช้"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">รหัสผ่าน</div>
        <div class="col-md-8"><input bind:value={sellerPassword} type="password" class="form-control" placeholder="รหัสผ่าน"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ระดับสิทธิ์</div>
        <div class="col-md-8">
            <input bind:checked={sale} type="checkbox" class="form-check-input"> ขายของได้<br>
            <input bind:checked={history} type="checkbox" class="form-check-input"> ดูประวัติการขายได้<br>
            <input bind:checked={member} type="checkbox" class="form-check-input"> จัดการระบบสมาชิกได้<br>
            <input bind:checked={inventory} type="checkbox" class="form-check-input"> จัดการสินค้าได้<br>
            <input bind:checked={discount} type="checkbox" class="form-check-input"> จัดการส่วนลดได้<br>
            <input bind:checked={report} type="checkbox" class="form-check-input"> ออกและดูรายงานได้<br>
            <input bind:checked={setting} type="checkbox" class="form-check-input"> เจ้าของร้านค้า<br>
        </div>
    </div>
    <button on:click={addSeller} class="btn btn-success" disabled={sellerName == '' || sellerSurname == '' || sellerPhoneNumber == '' || sellerUserName == '' || sellerPassword == ''}>+ เพิ่ม</button>
</div>

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

    let sellerName = '';
    let sellerSurname = '';
    let sellerPhoneNumber = '';
    let sellerUserName = '';
    let sellerPassword = '';

    let sale = false;
    let history = false;
    let member = false;
    let inventory = false;
    let discount = false;
    let report = false;
    let setting = false;

    const addSeller = async () => {
        await dataService.addSeller(sellerUserName, sellerPassword, sellerName, sellerSurname, sellerPhoneNumber, {
            sale,
            history,
            member,
            inventory,
            discount,
            report,
            setting
        });
        alert('เพิ่มข้อมูลสำเร็จ');
        location.reload();
    }
</script>