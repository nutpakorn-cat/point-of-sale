{#if localStorage.getItem('permission') && JSON.parse(localStorage.getItem('permission')).member}
    <div>
        <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
            <div class="card">
                <div class="card-header">
                    สมาชิก
                </div>
                <div class="card-body">
                    <div class="text-center" style="margin-bottom: 50px;margin-top: 30px;">
                        <button on:click={() => { isShowAddMember = true; }} class="btn btn-success">+ เพิ่มสมาชิก</button>
                        <Modal
                            modalTitle="เพิ่มสมาชิก"
                            modalComponent="AddMember"
                            isShow={isShowAddMember}
                            close={() => { isShowAddMember = false }}
                        />
                    </div>
                    <div class="container">
                        <div class="row text-center" style="margin-top: 20px;">
                            <div class="col-md-2" style="padding-top: 8px;">ค้นหา</div>
                            <div class="col-md-8"><input on:change={fetchData} bind:value={query} type="text" class="form-control" placeholder="ชื่อ, นามสกุล หรือเบอร์โทรศัพท์ลูกค้า"></div>
                            <div class="col-md-2">
                                <button class="btn btn-success">ค้นหา</button>
                            </div>
                        </div>
                        {#if userList}
                            <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                                <thead>
                                    <th>#</th>
                                    <th>ชื่อ</th>
                                    <th>นามสกุล</th>
                                    <th>เบอร์โทรศัพท์</th>
                                    <th>แต้ม</th>
                                    <th>จัดการ</th>
                                </thead>
                                <tbody>
                                    {#each userList as user, i}
                                        <Modal
                                            modalTitle={'แก้ไขสมาชิก ' + user.userName + ' ' + user.userSurname}
                                            modalComponent="EditMember"
                                            isShow={isShowEditMember[i]}
                                            close={() => { isShowEditMember[i] = false }}
                                            modalData={user.userId}
                                        />
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.userSurname}</td>
                                            <td>{user.userPhoneNumber}</td>
                                            <td>{user.userPoint}</td>
                                            <td>
                                                <button on:click={() => { isShowEditMember[i] = true }} class="btn btn-warning" style="color: white;">แก้ไข</button>
                                                <button on:click={() => { deleteUser(i) }} class="btn btn-danger">ลบ</button>
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

    import dataService from './../dataService';

    import Modal from '../components/Modal.svelte';

    let userList = [];

    let query = '';

    let isShowEditMember = [];
    let isShowAddMember = false;

    onMount(() => {

        if (!localStorage.getItem('loginData'))
            navigate('/', {replace: true});

        fetchData();
    });

    const fetchData = async () => {

        const result = await dataService.getUserByQuery(query);

        if (('error') in result.data)
            return;

        userList = result.data;
    }

    const deleteUser = async (i) => {
        const result = await dataService.deleteUserById(userList[i].userId);

        if ('error' in result.data)
            return;

        userList.splice(i, 1);
        userList = userList;
    }

</script>