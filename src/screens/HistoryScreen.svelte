<div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ประวัติการขาย
            </div>
            <div class="card-body">
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
                    <table class="table table-striped table-hover text-center table-bordered" style="margin-top: 50px;">
                        <thead>
                            <th>#</th>
                            <th>เวลา</th>
                            <th>ลูกค้า</th>
                            <th>สินค้า</th>
                            <th>ใบเสร็จ</th>
                            <th>ยอดรวม (บาท)</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td colspan="5">ยอดรวม</td>
                                <td>500.00</td>
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