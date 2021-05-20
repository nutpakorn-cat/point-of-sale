<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ส่วนลด
            </div>
            <div class="card-body">
                <div class="text-center" style="margin-bottom: 50px;margin-top: 30px;">
                    <button class="btn btn-success">+ เพิ่มส่วนลด</button>
                </div>
                <div class="container">
                    <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                        <thead>
                            <th>#</th>
                            <th>ชื่อส่วนลด</th>
                            <th>รหัส</th>
                            <th>ออกโดย</th>
                            <th>จัดการ</th>
                        </thead>
                        <tbody>
                            <tr>
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

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

</script>