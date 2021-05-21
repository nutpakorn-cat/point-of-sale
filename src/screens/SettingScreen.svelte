{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).setting}
    <div>
        <div class="container" style="margin-top: 50px;">
            <div class="card">
                <div class="card-header">
                    ตั้งค่าระบบ
                </div>
                <div class="card-body">
                    {#if isEditSuccess}
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <p>แก้ไขข้อมูลร้านสำเร็จ</p>
                            <button on:click={() => { isEditSuccess = false }} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    {/if}
                    <div class="container text-center">
                        <div class="row" style="margin-bottom: 20px;">
                            <div class="col-md-4" style="padding-top: 8px;">ชื่อร้าน</div>
                            <div class="col-md-8"><input bind:value={storeName} type="text" class="form-control" placeholder="ชื่อร้านค้า"></div>
                        </div>
                        <div class="row" style="margin-bottom: 20px;">
                            <div class="col-md-4" style="padding-top: 8px;">มูลค่าแต้มสมาชิก (1 แต้ม ลดราคาได้ ... บาท)</div>
                            <div class="col-md-8"><input bind:value={pointDiscountRate} type="text" class="form-control" placeholder="มูลค่าแต้มสมาชิก"></div>
                        </div>
                        <button on:click={editSystem} style="width: 100%; color: white;" class="btn btn-warning" disabled={(storeName == '')}>แก้ไข</button>
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
                    {#if isSuccess}
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <p>เปลี่ยนรหัสผ่านสำเร็จ</p>
                            <button on:click={() => { isSuccess = false }} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    {/if}
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
                        <button on:click={changePassword} style="width: 100%;" class="btn btn-success" disabled={(oldPassword == '' || newPassword == '' || newPassword != confirmNewPassword)}>เปลี่ยนรหัสผ่าน</button>
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
                        <Modal
                            modalTitle="เพิ่มพนักงานขาย"
                            modalComponent="AddSeller"
                            isShow={isShowAddSeller}
                            close={() => { isShowAddSeller = false }}
                        />
                        <button on:click={() => { isShowAddSeller = true }} class="btn btn-success">+ เพิ่มพนักงานขาย</button>
                    </div>
                    <div class="container">
                        {#if sellerList}
                            <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                                <thead>
                                    <th>#</th>
                                    <th>ชื่อ</th>
                                    <th>นามสกุล</th>
                                    <th>สิทธิ์</th>
                                    <th>จัดการ</th>
                                </thead>
                                <tbody>
                                    {#each sellerList as seller, i}
                                        <Modal
                                            modalTitle="แก้ไขข้อมูลพนักงาน"
                                            modalComponent="EditSeller"
                                            isShow={isShowEditSeller[i]}
                                            close={() => { isShowEditSeller[i] = false }}
                                            modalData={seller.sellerId}
                                        />
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{seller.sellerName}</td>
                                            <td>{seller.sellerSurname}</td>
                                            <td>
                                                {#each Object.keys(seller.permission) as permission}
                                                    {#if seller.permission[permission]}
                                                        + {permissionMap(permission)}<br>
                                                    {/if}
                                                {/each}
                                            </td>
                                            <td>
                                                <button on:click={() => { isShowEditSeller[i] = true }} class="btn btn-warning" style="color: white;">แก้ไข</button>
                                                <button on:click={() => { deleteSeller(i) }} class="btn btn-danger">ลบ</button>
                                            </td>
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
{:else}
    <h3 class="text-center" style="margin-top: 50px;">บัญชีของคุณไม่มีสิทธิ์ใช้งานในส่วนนี้</h3>
{/if}

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";
    import Modal from '../components/Modal.svelte';

    import dataService from './../dataService';

    let storeName = '';
    let pointDiscountRate = '';

    let oldPassword = '';
    let newPassword = '';
    let confirmNewPassword = '';

    let sellerList = [];
    let isShowAddSeller = false;
    let isShowEditSeller = [];

    let isEditSuccess = false;
    let isSuccess = false;

    const permissionMap = (permission) => {
        switch (permission) {
            case 'sale':
                return 'ขายสินค้าได้'
            case 'history':
                return 'ดูประวัติการขายได้'
            case 'member':
                return 'จัดการข้อมูลสมาชิกได้'
            case 'inventory':
                return 'จัดการคลังสินค้าได้'
            case 'discount':
                return 'จัดการส่วนลดได้'
            case 'report':
                return 'ออกรายงานประจำวันได้'
            case 'setting':
                return 'ตั้งค่าร้าน และจัดการข้อมูลพนักงานได้'
        }
    }

    onMount(() => {

        if (!localStorage.getItem('loginData'))
            navigate('/', {replace: true});

        fetchData();
    });

    const fetchData = async () => {
        const result = await dataService.getSeller();

        if (('error') in result.data)
            return;
        
        sellerList = result.data;

        const systemResult = await dataService.getPointDiscountRate();

        if (('error') in result.data)
            return;
        
        storeName = systemResult.data.storeName;
        pointDiscountRate = systemResult.data.pointDiscountRate;
    }

    const deleteSeller = async (i) => {
        const result = await dataService.deleteSeller(sellerList[i].sellerId);

        if (('error') in result.data)
            return;

        sellerList.splice(i, 1);
        sellerList = sellerList;
    }

    const changePassword = async () => {
        await dataService.changePassword(localStorage.getItem('sellerId'), oldPassword, newPassword);
        isSuccess = true;
    }

    const editSystem = async () => {
        await dataService.updateStore(storeName, pointDiscountRate);
        isEditSuccess = true;
        location.reload();
    }

</script>