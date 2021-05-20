<div>
    <div class="product-input">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-2" style="padding-top: 8px;">
                    รหัสสินค้า
                </div>
                <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="รหัสสินค้า">
                </div>
                <div class="col-md-2">
                    <button class="btn btn-success">+ เพิ่ม</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 50px;margin-bottom: 100px;">
        <div class="card">
            <div class="card-header">
                ขายของ
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card" style="margin-bottom: 30px;">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="image">

                                                </div>
                                            </div>
                                            <div class="col-md-5" style="padding-left: 20px;padding-top: 35px;">
                                                <p>น้ำยาอาบน้ำ</p>
                                                <p>ราคา: 500.00 บาท</p>
                                            </div>
                                            <div class="col-md-4 text-center" style="padding-top: 35px;">
                                                <button class="btn btn-danger" style="color: white; width: 50%">ลบ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style="margin-bottom: 30px;">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="image">

                                                </div>
                                            </div>
                                            <div class="col-md-5" style="padding-left: 20px;padding-top: 35px;">
                                                <p>น้ำยาอาบน้ำ</p>
                                                <p>ราคา: 500.00 บาท</p>
                                            </div>
                                            <div class="col-md-4 text-center" style="padding-top: 35px;">
                                                <button class="btn btn-danger" style="color: white; width: 50%">ลบ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="text-center" style="margin-top: 20px;color: green;">ราคารวม: 100.00 บาท</h3>
                                <h4 style="margin-top: 50px;">ระบบสมาชิก</h4>
                                <hr>
                                <div class="row text-center">
                                    <div class="col-md-4">
                                        <p style="margin-top: 7px;">สมาชิก</p>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" placeholder="เบอร์โทรศัพท์สมาชิก">
                                    </div>
                                </div>
                                <h4 style="margin-top: 30px;">รหัสส่วนลด</h4>
                                <hr>
                                <div class="row text-center">
                                    <div class="col-md-4">
                                        <p style="margin-top: 7px;">รหัสส่วนลด</p>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" placeholder="รหัสส่วนลด">
                                    </div>
                                </div>
                                <button class="btn btn-success" style="margin-top: 20px;width: 100%">ถัดไป</button>
                            </div>
                        </div>
                    </div>
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