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
    <button on:click={editMember} class="btn btn-warning" style="color: white;" disabled={userName == '' || userSurname == '' || userPhoneNumber == ''}>แก้ไข</button>
</div>

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

    export let modalData;

    let userName = '';
    let userSurname = '';
    let userPhoneNumber = '';

    onMount(async () => {
        const result = await dataService.getUserById(modalData);

        console.log(result);
        userName = result.data.userName;
        userSurname = result.data.userSurname;
        userPhoneNumber = result.data.userPhoneNumber
    });

    const editMember = async () => {
        await dataService.updateMember(modalData, userName, userSurname, userPhoneNumber);
        alert('แก้ไขสำเร็จ ');
        location.reload();
    }
</script>