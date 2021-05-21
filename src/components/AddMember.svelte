<div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">ชื่อจริง</div>
        <div class="col-md-8"><input bind:value={userName} type="text" class="form-control" placeholder="ชื่อจริง"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">นามสกุล</div>
        <div class="col-md-8"><input bind:value={userSurname} type="text" class="form-control" placeholder="นามสกุล"></div>
    </div>
    <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-4" style="padding-top: 8px;">เบอร์โทรศัพท์</div>
        <div class="col-md-8"><input bind:value={userPhoneNumber} type="text" class="form-control" placeholder="เบอร์โทรศัพท์"></div>
    </div>
    <button on:click={addMember} class="btn btn-success" disabled={userName == '' || userSurname == '' || userPhoneNumber == ''}>+ เพิ่ม</button>
</div>

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

    let userName = '';
    let userSurname = '';
    let userPhoneNumber = '';

    const addMember = async () => {
        await dataService.addMember(userName, userSurname, userPhoneNumber);
        alert('เพิ่มข้อมูลสำเร็จ');
        location.reload();
    }
</script>