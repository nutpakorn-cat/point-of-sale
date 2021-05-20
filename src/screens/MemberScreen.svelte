<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                สมาชิก
            </div>
            <div class="card-body">
                <div class="text-center" style="margin-bottom: 50px;margin-top: 30px;">
                    <button class="btn btn-success">+ เพิ่มสมาชิก</button>
                </div>
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4" style="padding-top: 8px;">เริ่มต้นวันที่</div>
                                <div class="col-md-8"><input type="date" class="form-control"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4" style="padding-top: 8px;">สิ้นสุดวันที่</div>
                                <div class="col-md-8"><input type="date" class="form-control"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center" style="margin-top: 20px;">
                        <div class="col-md-2" style="padding-top: 8px;">ค้นหา</div>
                        <div class="col-md-8"><input type="text" class="form-control" placeholder="ชื่อ, นามสกุล หรือเบอร์โทรศัพท์ลูกค้า"></div>
                        <div class="col-md-2">
                            <button class="btn btn-success">ค้นหา</button>
                        </div>
                    </div>
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

<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-navigator";

    import dataService from './../dataService';

</script>