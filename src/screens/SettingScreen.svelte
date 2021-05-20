{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).setting}
<div>
    <div class="container" style="margin-top: 50px;">
        <div class="card">
            <div class="card-header">
                ตั้งค่าพื้นฐาน
            </div>
            <div class="card-body">
                <div class="container text-center">
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">ชื่อร้าน</div>
                        <div class="col-md-8"><input bind:value={storeName} type="text" class="form-control" placeholder="ชื่อร้านค้า"></div>
                    </div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">รูปร้าน</div>
                        <div class="col-md-8"><input bind:value={storeImage} type="file" class="form-control"></div>
                    </div>
                    <button style="width: 100%; color: white;" class="btn btn-warning" disabled={(storeName == '')}>แก้ไข</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 50px;">
        <div class="card">
            <div class="card-header">
                เปลี่ยนรหัสผ่าน
            </div>
            <div class="card-body">
                <div class="container text-center">
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">รหัสผ่านเดิม</div>
                        <div class="col-md-8"><input bind:value={oldPassword} type="password" class="form-control" placeholder="รหัสผ่านเดิม"></div>
                    </div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">รหัสผ่านใหม่</div>
                        <div class="col-md-8"><input bind:value={newPassword} type="password" class="form-control" placeholder="รหัสผ่านเดิม"></div>
                    </div>
                    <div class="row" style="margin-bottom: 20px;">
                        <div class="col-md-4" style="padding-top: 8px;">ยืนยันรหัสผ่านใหม่</div>
                        <div class="col-md-8"><input bind:value={confirmNewPassword} type="password" class="form-control" placeholder="รหัสผ่านเดิม"></div>
                    </div>
                    <button style="width: 100%;" class="btn btn-success" disabled={(oldPassword == '' || newPassword == '' || newPassword != confirmNewPassword)}>เปลี่ยนรหัสผ่าน</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 60px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                พนักงานขาย
            </div>
            <div class="card-body">
                <div class="text-center" style="margin-bottom: 50px;margin-top: 30px;">
                    <button class="btn btn-success">+ เพิ่มพนักงานขาย</button>
                </div>
                <div class="container">
                    <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                        <thead>
                            <th>#</th>
                            <th>ชื่อ</th>
                            <th>นามสกุล</th>
                            <th>สิทธิ์</th>
                            <th>กิจกรรม</th>
                            <th>จัดการ</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td><button class="btn btn-warning" style="color: white;">แก้ไข</button> <button class="btn btn-danger">ลบ</button></td>
                            </tr>
                        </tbody>
                    </table>
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

    let storeName = '';
    let storeImage = '';

    let oldPassword = '';
    let newPassword = '';
    let confirmNewPassword = '';

</script>